exports.up = function(knex) {
  return knex.schema.createTable("passwords", table => {
    table.increments();
    table
      .string("description")
      .notNullable()
      .unique();
    table.string("password").notNullable();
    table.integer("user_id").unsigned();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("passwords");
};
