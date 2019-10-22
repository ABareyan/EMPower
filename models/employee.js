// module.exports = function(sequelize, DataTypes) {
//     var Example = sequelize.define("Example", {
//         text: DataTypes.STRING,
//         description: DataTypes.TEXT
//     });
//     return Example;
// };

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
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 50]
      }
    },
    // eslint-disable-next-line camelcase
    job_type: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 160]
      }
    },
    compensation: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 160]
      }
    }
  });
  return Employee;
};