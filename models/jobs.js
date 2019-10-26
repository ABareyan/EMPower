module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define(
    "Jobs",
    {
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255]
        }
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true
      },
      phone_number: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 11]
        }
      },
      // eslint-disable-next-line camelcase
      location: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 255]
        }
      },
      // eslint-disable-next-line camelcase
      job_type: {
        type: DataTypes.TEXT,
        allowNull: false,
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
      position: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255]
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255]
        }
      },
      hourly_wage: {
        type: DataTypes.INTEGER,
        validate: {
          len: [1, 160]
        }
      },
    },
    {
      timestamps: true,
      tableName: "jobs",
      paranoid: true,
      underscored: true
    }
  );

  return Jobs;
  
};
