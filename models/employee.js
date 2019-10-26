module.exports = function (sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true
    },
    // eslint-disable-next-line camelcase
    phone_number: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 11]
      }
    },
    // eslint-disable-next-line camelcase
    job_type: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 160]
      }
    },
    job_category: {
      type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 160]
        }
    },
    location: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 160]
      }
    },
    hourly_wage: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 160]
      }
    }
  },
  {
    timestamps: true,
    tableName: "employee",
    paranoid: true,
    underscored: true
  }
  );


  return Employee;
};