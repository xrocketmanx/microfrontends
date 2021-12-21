const start = async () => {
  const { mount } = await import('./bootstrap');

  mount(document.getElementById('auth-dev-root'), {
    shouldUseDefaultHistory: true
  });
};

start();