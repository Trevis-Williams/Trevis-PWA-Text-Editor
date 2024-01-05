const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();

    // Save the event so it can be triggered later.
    deferredPrompt = event;

    // Update UI to notify the user they can add to home screen
    // For example, make the install button visible
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Hide the install button, as it won't be needed anymore
    butInstall.style.display = 'none';

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    // Optionally, send analytics about installation
    console.log(`User response to the install prompt: ${outcome}`);

    // We no longer need the prompt. Clear it up.
    deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // App was installed
    console.log('PWA was installed');

    // You might update the UI or send analytics here
});
