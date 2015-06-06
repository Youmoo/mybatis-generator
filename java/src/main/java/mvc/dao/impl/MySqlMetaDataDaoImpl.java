package mvc.dao.impl;

import mvc.dao.DatabaseMetaDataDao;
import mvc.domain.TableDesc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * 获取MySQL数据库元信息
 *
 * @author youmoo
 * @since 15/6/6 下午4:54
 */
@Repository
public class MySqlMetaDataDaoImpl implements DatabaseMetaDataDao {
    /**
     * 目前只需要数据列的field、type字段
     */
    static final String[] COLUMNS = "Field,Type".split(",");
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public List<String> tables() {
        return jdbcTemplate.query("show tables", new ResultSetExtractor<List<String>>() {
            @Override
            public List<String> extractData(ResultSet rs) throws SQLException, DataAccessException {
                List<String> tables = new ArrayList<String>();
                while (rs.next()) {
                    tables.add(rs.getString(1));
                }
                return tables;
            }
        });
    }

    @Override
    public TableDesc desc(final String tableName) {
        return jdbcTemplate.query("desc " + tableName, new ResultSetExtractor<TableDesc>() {
            @Override
            public TableDesc extractData(ResultSet rs) throws SQLException, DataAccessException {
                TableDesc tableDesc = new TableDesc(tableName);
                while (rs.next()) {
                    String field = rs.getString("Field");
                    String type = rs.getString("Type");
                    tableDesc.addColumnDesc(field, type);
                }
                tableDesc.setOk(true);
                return tableDesc;
            }
        });
    }

}
