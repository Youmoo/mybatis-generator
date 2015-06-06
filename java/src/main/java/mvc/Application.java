package mvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.util.ResourceUtils;

import javax.sql.DataSource;
import java.io.File;

/**
 * 启动类
 *
 * mvn spring-boot:run -Dserver.port=8080
 *
 * @author youmoo
 * @since 15/6/6 下午4:42
 */
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    /**
     * 数据源配置
     * 可以将这一项配置在application.properties中
     */
    @Bean
    public DataSource dataSource(DbConfig dbConfig) {
        HikariConfig config = new HikariConfig();
        config.setDataSourceClassName(dbConfig.getJdbcDriver());
        config.addDataSourceProperty("serverName", dbConfig.getHost());
        config.addDataSourceProperty("port", dbConfig.getDbPort());
        config.addDataSourceProperty("databaseName", dbConfig.getDatabase());
        config.addDataSourceProperty("user", dbConfig.getUser());
        config.addDataSourceProperty("password", dbConfig.getPassword());
        config.setMaximumPoolSize(dbConfig.getConnectionLimit());

        return new HikariDataSource(config);
    }

    @Bean
    public DbConfig readDbConfig() throws Exception {
        File config = ResourceUtils.getFile("classpath:config.json");
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(config, DbConfig.class);
    }
}
