package xyz.itsme.uiplayground;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.concurrent.atomic.AtomicInteger;

@Scope("view")
@Component
public class CounterAction implements Serializable {
    private final AtomicInteger counter = new AtomicInteger(0);
    
    private final CounterDao counterDao;

    public CounterAction(CounterDao counterDao) {
        this.counterDao = counterDao;
    }

    public int getCounter() {
        return counter.get();
    }

    public void increment() {
        counter.incrementAndGet();
    }
    
    public void save() {
        counterDao.save(getCounter());
    }
}
