package com.ShoeVibes.controller;

import com.ShoeVibes.dto.OrderDto;
import com.ShoeVibes.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/detail/{orderId}")
    public ResponseEntity<OrderDto> detailOrder(@PathVariable Long orderId) {
        return ResponseEntity.ok(orderService.detailOrder(orderId));
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping("/list")
    public ResponseEntity<List<OrderDto>> listOrders(Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity.ok(orderService.listOrders(email));
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping("/create")
    public ResponseEntity<OrderDto> createOrder(
            @RequestParam String address,
            Authentication authentication) {

        String email = authentication.getName();
        return ResponseEntity.ok(orderService.createOrder(email, address));
    }

    @GetMapping("/latest4")
    public ResponseEntity<List<OrderDto>> getLatest4Orders() {
        List<OrderDto> last4Orders = orderService.listLast4Orders();
        return ResponseEntity.ok(last4Orders);
    }


    @PreAuthorize("isAuthenticated()")
    @DeleteMapping("/delete/{orderId}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long orderId) {
        orderService.deleteOrder(orderId);
        return ResponseEntity.noContent().build();
    }
}
