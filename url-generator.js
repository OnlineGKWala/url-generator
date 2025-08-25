const slugInput = document.getElementById('slugInput');

slugInput.addEventListener('input', () => {
    let text = slugInput.value.trim().toLowerCase();
    let slug = text.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    slugInput.value = slug;
});