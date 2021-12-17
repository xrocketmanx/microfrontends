const start = async () => {
  const { mount } = await import('./bootstrap');

  mount(document.getElementById('marketing-dev-root'));
};

start();