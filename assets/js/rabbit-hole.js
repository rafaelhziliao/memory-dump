/**
 * Rabbit Hole — collapsible optional detour sections
 * Requires .rabbit-hole markup from _includes/macros/rabbit-hole.njk
 */
(function () {
    function toggleRabbitHole(id, open) {
        var hole = document.getElementById(id);
        if (!hole) return;

        var chevron = document.getElementById(id + '-chevron');
        var btn = hole.querySelector('.rabbit-toggle');
        var isOpen = open === true ? true : open === false ? false : !hole.classList.contains('expanded');

        hole.classList.toggle('expanded', isOpen);
        if (btn) btn.setAttribute('aria-expanded', isOpen);
        if (chevron) chevron.textContent = isOpen ? '↑ Collapse' : 'Follow the rabbit →';
    }

    window.toggleRabbitHole = toggleRabbitHole;

    function initRabbitHoles() {
        document.querySelectorAll('.rabbit-hole').forEach(function (hole) {
            var id = hole.id;
            if (!id) return;

            document.querySelectorAll('a[href="#' + id + '"]').forEach(function (link) {
                link.addEventListener('click', function () {
                    setTimeout(function () { toggleRabbitHole(id, true); }, 0);
                });
            });

            if (window.location.hash === '#' + id) {
                toggleRabbitHole(id, true);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initRabbitHoles);
    } else {
        initRabbitHoles();
    }
})();
