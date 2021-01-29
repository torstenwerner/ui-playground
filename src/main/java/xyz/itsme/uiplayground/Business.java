package xyz.itsme.uiplayground;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.concurrent.atomic.AtomicInteger;

@Scope("view")
@Component
public class Business {
    private final AtomicInteger counter = new AtomicInteger(0);

    public int getCounter() {
        return counter.get();
    }

    public void increment() {
        counter.incrementAndGet();
    }
}
