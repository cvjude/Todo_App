'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todos = sequelize.define(
    'Todos',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      completed: DataTypes.BOOLEAN,
    },
    {}
  );
  Todos.associate = function (models) {
    // associations can be defined here
  };
  return Todos;
};
