const timeSince = date => {
  const seconds = Math.floor((new Date() - date) / 3600);

  if (seconds < 60) {
    return `MOMENTS AGO`;
  }

  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} MINUTES AGO`;
  }

  if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} HOURS AGO`;
  }

  if (seconds < 604800) {
    const days = Math.floor(seconds / 86400);
    return `${days} DAYS AGO`;
  }

  const days = Math.floor(seconds / 86400);
  if (days < 30) {
    const weeks = Math.floor(days / 7);
    if (weeks === 1) {
      return `${weeks} WEEK AGO`;
    } else {
      return `${weeks} WEEKS AGO`;
    }
  }

  const weeks = Math.floor(days / 7);
  if (weeks < 53) {
    const months = Math.floor( weeks / 4);
    if (months === 1) {
      return `${months} MONTH AGO`;
    } else {
      return `${months} MONTHS AGO`;
    }
  }

  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

};

export default timeSince;
