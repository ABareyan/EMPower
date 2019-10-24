module.exports = function (sequelize, DataTypes) {
  var Employer = sequelize.define("Employer", {
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
      isEmail: true,
      validate: {
        len: [1, 160]
      }
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
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
  return Employer;
};