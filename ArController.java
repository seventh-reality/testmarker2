package com.example.arplatform.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ArController {

    @GetMapping("/")
    public String index() {
        return "index";
    }
}
