function getCategoryColor(category) {
  const colors = {
    'Game': 'info',
    'System': 'success',
    'Figure': 'pink'
  };

  return colors[category];
}

export {getCategoryColor};