class HomeworkResource {
  constructor(data) {
    this.id = data.id;
    this.text = data.text;
    this.happyRate = data.happyRate;
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false, // Format 24 jam
      timeZone: 'Asia/Jakarta', // Set timezone to Jakarta
    };
    this.createdAt = new Intl.DateTimeFormat('id-ID', options).format(
      new Date(data.createdAt),
    );
  }
}

module.exports = HomeworkResource;
