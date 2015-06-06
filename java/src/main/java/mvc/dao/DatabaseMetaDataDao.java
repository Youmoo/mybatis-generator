package mvc.dao;

import mvc.domain.TableDesc;

import java.util.List;

/**
 * 用来获取数据库相关的元信息
 *
 * @author youmoo
 * @since 15/6/6 下午4:51
 */
public interface DatabaseMetaDataDao {

    /**
     * 获取一个库中的所有表名
     *
     * @return 数据中所有表的名称集合
     */
    List<String> tables();

    /**
     * 获取表的元信息
     *
     * @param tableName 表名称
     * @return 表的元信息
     */
    TableDesc desc(String tableName);
}
