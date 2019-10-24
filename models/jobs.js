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
        type: DataTypes.STRING,
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
      compensation: {
        type: DataTypes.INTEGER,
        validate: {
          len: [1, 160]
        }
      },
      createdAt: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(3)")
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal(
          "CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
        )
      }
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
