exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("username")
      .notNullable()
      .unique();
    table.string("password").notNullable();
    table.string("phone").notNullable();
    table
      .string("email")
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
