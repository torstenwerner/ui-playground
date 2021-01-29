package xyz.itsme.uiplayground;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class ApplicationTest {
    @Test
    void shouldAlwaysSucceed() {
        assertThat(true).isTrue();
    }
}
