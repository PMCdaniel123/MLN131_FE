const GoogleMap = () => {
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509999!2d144.95565111531817!3d-37.81720397975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218cdb1e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1697048597389!5m2!1sen!2sau";

  return (
    <div>
      <iframe
        src={embedUrl}
        width="100%"
        height="400px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
