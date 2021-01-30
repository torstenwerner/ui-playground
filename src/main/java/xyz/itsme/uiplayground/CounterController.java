package xyz.itsme.uiplayground;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CounterController {
    private final CounterDao counterDao;

    public CounterController(CounterDao counterDao) {
        this.counterDao = counterDao;
    }

    @PostMapping("/api/save/{value}")
    public void save(@PathVariable int value) {
        counterDao.save(value);
    }
}
