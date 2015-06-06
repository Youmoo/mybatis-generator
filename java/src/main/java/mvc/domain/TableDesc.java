package mvc.domain;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * 表格元信息
 *
 * @author youmoo
 * @since 15/6/6 下午4:49
 */
@Data
public class TableDesc {
    public TableDesc(String table) {
        this.table = table;
    }

    /**
     * 查询是否成功
     */
    private boolean ok;
    /**
     * 表名
     */
    private final String table;
    /**
     * 列元信息
     */
    private List<ColumnDesc> rows = new ArrayList<>();

    /**
     * 添加列元信息
     *
     * @param field 列名
     * @param type  列类型
     */
    public void addColumnDesc(String field, String type) {
        ColumnDesc columnDesc = new ColumnDesc();
        columnDesc.setField(field);
        columnDesc.setType(type);
        rows.add(columnDesc);
    }


    @Data
    public static class ColumnDesc {
        /**
         * 列名
         */
        String field;
        /**
         * 列类型
         */
        String type;
    }
}
