package xyz.itsme.uiplayground;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class CounterDao {
    private final Logger logger = LoggerFactory.getLogger(getClass());
    
    public void save(int counterValue) {
        logger.info("counter value {} saved", counterValue);
    }
}
