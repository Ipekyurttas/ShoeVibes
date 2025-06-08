package com.ShoeVibes.service;

import com.ShoeVibes.dto.OrderDto;
import com.ShoeVibes.entity.*;
import com.ShoeVibes.repository.CartRepository;
import com.ShoeVibes.repository.OrderRepository;
import com.ShoeVibes.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartRepository cartRepository;


    public OrderDto createOrder(String email, String address) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Cart cart = cartRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Cart not found"));

        if (cart.getItems() == null || cart.getItems().isEmpty()) {
            throw new RuntimeException("Cart is empty");
        }

        Order order = new Order();
        order.setUser(user);
        order.setAddress(address);
        order.setDateTime(LocalDateTime.now());

        List<OrderItem> orderItems = cart.getItems().stream().map(cartItem -> {
            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setProduct(cartItem.getProduct());
            orderItem.setQuantity(cartItem.getQuantity());
            return orderItem;
        }).collect(Collectors.toList());

        order.setOrderItems(orderItems);
        order.setTotalPrice(totalPrice(orderItems));

        orderRepository.save(order);

        cart.getItems().clear();
        cartRepository.save(cart);

        return convertToDto(order);
    }


    public List<OrderDto> listOrders(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Order> orders = orderRepository.findByUser(user);

        return orders.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public List<OrderDto> listLast4Orders() {
        List<Order> orders = orderRepository.findTop4ByOrderByDateTimeDesc();

        return orders.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }


    public OrderDto detailOrder(Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        return convertToDto(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    private BigDecimal totalPrice(List<OrderItem> orderItems) {
        return orderItems.stream()
                .map(item -> item.getProduct().getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    private OrderDto convertToDto(Order order) {
        String userName = order.getUser() != null ? order.getUser().getFirstName() : null;
        String lastName = order.getUser() != null ? order.getUser().getLastName() : null;
        List<Long> orderItemIds = null;
        List<String> productNames = null;
        List<String> productImages = null;

        if (order.getOrderItems() != null) {
            orderItemIds = order.getOrderItems().stream()
                    .map(OrderItem::getId)
                    .collect(Collectors.toList());

            productNames = order.getOrderItems().stream()
                    .map(oi -> oi.getProduct() != null ? oi.getProduct().getName() : null)
                    .collect(Collectors.toList());

            productImages = order.getOrderItems().stream()
                    .map(oi -> {
                        if (oi.getProduct() == null) {
                            return "/images/default-product.png";
                        }

                        // Resimleri Image entity listesinden alıyoruz
                        List<Image> images = oi.getProduct().getImages();
                        if (images == null || images.isEmpty()) {
                            return "/images/default-product.png";
                        }

                        // İlk resmin URL'sini döndürüyoruz
                        return images.get(0).getUrl();
                    })
                    .collect(Collectors.toList());
        }

        return new OrderDto(
                order.getId(),
                order.getAddress(),
                order.getTotalPrice(),
                order.getDateTime(),
                order.getUser() != null ? order.getUser().getId() : null,
                orderItemIds,
                productNames,
                productImages,
                userName,
                lastName
        );
    }


}
