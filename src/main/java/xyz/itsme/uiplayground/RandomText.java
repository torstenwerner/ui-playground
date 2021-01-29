package xyz.itsme.uiplayground;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class RandomText {
    public String getText() {
        return "Hello from Spring: " + LocalDateTime.now().toString();
    }
}
