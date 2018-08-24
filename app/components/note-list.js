import Component from '@ember/component';

export default Component.extend({
  actions: {
    showRecord(record) {
      alert (record);
    }
  }
});
