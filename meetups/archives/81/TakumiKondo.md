# Takumi Kondo

## 会社や業務で普段やっていること
PHP, VBA, Javaと転々としながら業務をこなしてきました。
1月から社内ポータルサイトを作成しています。（Java/Spring）
フロントエンドも多少できる、雑歴エンジニアです。

## 相談乗れるかもしれないこと
・言語：Java, PHP, VBA, JavaScript, BootStrap
・DB　：MySQL

## 今日やること
Spring本の学習（8章：Spring JDBC）

## 相談するかもしれないこと
Java, Springについて

## 今日の成果

◎JdbcTeplateの学習

・Mapで取得する
  単一：Map<String, Object>
　複数：List<Map<String, Object>>

・独自オブジェクトで取得するMapper（RowMapper）
  単一：User
　複数：List<User>
　※独自オブジェクトのRowMapperの準備が必要

・独自オブジェクトで取得するMapper（BeanPropertyRowMapper）
  単一：User
　複数：List<User>
　※独自オブジェクトのRowMapperの準備は不要だが、
　　そのオブジェクトにDefault Constructor と Setterが必要

（所感）
setterを排除し、完全コンストラクタでValueObjectにできる
RowMapperが個人的には好きです。


◎NamedParameterJdbcTemplateの学習
JdbcTeplateは、?の個数と順番でバインドする。
NamedParameterJdbcTemplateは、バインドする名称を指定する。

JdbcTeplateの場合
　String sql = "SELECT * FROM users WHERE id = ? AND param = ?";
　jdbcTemplate.queryForMap(sql, userId, userParam);
　
NamedParameterJdbcTemplateの場合
　String sql = "SELECT * FROM users WHERE id = :id AND param = :param";
　SqlParameterSource paramMap = new MapSqlParameterSource()
  	.addValue("id", userId)
  	.addValue("param", userParam);

（所感）
どこに何をバインドしているかがわかり易い、
NamedParameterJdbcTemplateの方が個人的には好きです。
