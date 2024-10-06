const statement = "create table author (id number, name string, age number, city string, state string, country string)";
const regExp = /create table (\w+) \((.+)\)/;
const parsedStatement = statement.match(regExp);
const tableName = parsedStatement[1];
let columns = parsedStatement[2];
columns = columns.split(", ");
console.log(tableName);
console.log(columns);