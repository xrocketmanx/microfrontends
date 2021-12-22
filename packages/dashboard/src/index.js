const start = async () => {
  const { mount } = await import('./bootstrap');

  mount(document.getElementById('dashboard-dev-root'));
};

start();