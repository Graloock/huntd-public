'use strict';

const table = 'recruiter_profiles';

const user_id = 775;
const city = 'Kyiv';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate(table,
      { city: city },
      { user_id: user_id },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate(table,
      { city: null },
      { user_id : user_id },
    );
  }
};
