/* NextGen Coders Academy | WEDE5020 Part 3 | Shared JavaScript */
(function () {
    'use strict';
    document.documentElement.classList.add('js');

    var $ = function (s, r) { return (r || document).querySelector(s); };
    var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
    // Escape user text before inserting it into the page (security)
    var esc = function (s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    };
    var rand = function (n) { return 'R ' + Math.round(n).toLocaleString('en-ZA'); };
    var longDate = function (iso) {
        return new Date(iso + 'T00:00:00').toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    /* ---------- Course data (used by courses page + enquiry response) ---------- */
    var RECIPIENT = 'info@nextgencoders.co.za'; // contact form email recipient
    var COURSES = [
        { id: 'web-development', title: 'Web Development', level: 'Beginner', weeks: 12, fee: 12500, intake: '2027-01-18', seats: 8,
          desc: 'Learn the foundations of creating websites using HTML, CSS and JavaScript.',
          topics: ['HTML fundamentals', 'CSS fundamentals', 'JavaScript basics', 'Website projects'] },
        { id: 'python', title: 'Python Programming', level: 'Beginner', weeks: 10, fee: 9500, intake: '2027-01-25', seats: 12,
          desc: 'Learn Python fundamentals and develop problem-solving skills through practical exercises.',
          topics: ['Python syntax', 'Variables and data types', 'Functions', 'Programming projects'] },
        { id: 'java', title: 'Java Programming', level: 'Intermediate', weeks: 14, fee: 11000, intake: '2027-02-08', seats: 5,
          desc: 'Develop a strong foundation in Java programming and object-oriented programming concepts.',
          topics: ['Java fundamentals', 'Object-oriented programming', 'Classes and objects', 'Practical projects'] },
        { id: 'cybersecurity', title: 'Cybersecurity Fundamentals', level: 'Beginner', weeks: 12, fee: 13500, intake: '2027-02-15', seats: 3,
          desc: 'Learn basic cybersecurity concepts and understand how to protect information and digital systems.',
          topics: ['Cybersecurity principles', 'Online security', 'Common cyber threats', 'Security awareness'] }
    ];
    var MODE = { 'full-time': { label: 'Full-time', factor: 1 }, 'part-time': { label: 'Part-time', factor: 0.85 }, 'online': { label: 'Online', factor: 0.75 } };
    var REG_FEE = 350;

    /* ---------- Scroll reveal animation + back-to-top button (DOM manipulation) ---------- */
    function initReveal() {
        var els = $$('main > section, .info-card, .mini-card');
        if (!('IntersectionObserver' in window)) { return; }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
        }, { threshold: 0.08 });
        els.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
    }
    function initBackToTop() {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'back-to-top'; b.textContent = '↑'; b.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(b);
        window.addEventListener('scroll', function () { b.classList.toggle('show', window.scrollY > 400); }, { passive: true });
        b.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    /* ---------- Accordion (home page FAQ) ---------- */
    function initAccordion() {
        $$('.accordion-trigger').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var open = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', String(!open));
                btn.closest('.accordion-item').classList.toggle('open', !open);
            });
        });
    }

    /* ---------- Gallery lightbox (about page) ---------- */
    function initLightbox() {
        var items = $$('.gallery-item');
        if (!items.length || typeof HTMLDialogElement === 'undefined') { return; }
        var dlg = document.createElement('dialog');
        dlg.id = 'lightbox'; dlg.setAttribute('aria-label', 'Image viewer');
        dlg.innerHTML = '<figure><img alt=""><figcaption></figcaption></figure>' +
            '<div class="lb-controls"><button type="button" data-a="prev" aria-label="Previous image">‹</button>' +
            '<button type="button" data-a="next" aria-label="Next image">›</button>' +
            '<button type="button" data-a="close" aria-label="Close image viewer">✕</button></div>';
        document.body.appendChild(dlg);
        var i = 0;
        function show(n) {
            i = (n + items.length) % items.length;
            var b = items[i], img = $('img', dlg);
            img.src = b.dataset.full; img.alt = b.dataset.alt;
            $('figcaption', dlg).textContent = b.dataset.caption + ' (' + (i + 1) + ' of ' + items.length + ')';
        }
        items.forEach(function (b, n) { b.addEventListener('click', function () { show(n); dlg.showModal(); }); });
        dlg.addEventListener('click', function (e) {
            var a = e.target.dataset ? e.target.dataset.a : null;
            if (a === 'next') { show(i + 1); } else if (a === 'prev') { show(i - 1); }
            else if (a === 'close' || e.target === dlg) { dlg.close(); }
        });
        dlg.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowRight') { show(i + 1); } else if (e.key === 'ArrowLeft') { show(i - 1); }
        });
    }

    /* ---------- Dynamic courses + search/filter/sort ---------- */
    function initCourses() {
        var grid = $('#courses-grid');
        if (!grid || !$('#course-search')) { return; }
        var q = $('#course-search'), lvl = $('#course-level'), sort = $('#course-sort'), count = $('#course-count');
        function render() {
            var term = q.value.trim().toLowerCase();
            var list = COURSES.filter(function (c) {
                var hay = (c.title + ' ' + c.desc + ' ' + c.topics.join(' ') + ' ' + c.level).toLowerCase();
                return (lvl.value === 'all' || c.level === lvl.value) && (!term || hay.indexOf(term) > -1);
            });
            list.sort(function (a, b) {
                if (sort.value === 'fee-asc') { return a.fee - b.fee; }
                if (sort.value === 'fee-desc') { return b.fee - a.fee; }
                if (sort.value === 'duration') { return a.weeks - b.weeks; }
                return a.title.localeCompare(b.title);
            });
            grid.innerHTML = list.map(function (c, n) {
                return '<article class="course-card visible"><span class="card-number">' + String(n + 1).padStart(2, '0') + '</span>' +
                    '<h3>' + esc(c.title) + '</h3><p>' + esc(c.desc) + '</p>' +
                    '<p class="course-meta"><span>' + c.level + '</span><span>' + c.weeks + ' weeks</span><span>From ' + rand(c.fee * MODE['online'].factor) + '</span></p>' +
                    '<ul>' + c.topics.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
                    '<a class="text-link" href="enquiry.html?course=' + c.id + '">Enquire about this course →</a></article>';
            }).join('');
            if (!list.length) { grid.innerHTML = '<p class="no-results">No courses match your search. Try a different keyword or level.</p>'; }
            count.textContent = list.length + (list.length === 1 ? ' course found' : ' courses found');
        }
        [q, lvl, sort].forEach(function (el) { el.addEventListener('input', render); el.addEventListener('change', render); });
        render();
    }

    /* ---------- Form validation helpers ---------- */
    var V = {
        name: function (v) { return /^[A-Za-zÀ-ÿ' -]{2,60}$/.test(v) || 'Enter your full name (2–60 letters, no numbers).'; },
        email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || 'Enter a valid email address, e.g. name@example.com.'; },
        phone: function (v) { return v === '' || /^(\+27|0)[1-9][0-9]{8}$/.test(v.replace(/[\s-]/g, '')) || 'Enter a valid South African number, e.g. 011 000 0000 or +27 82 123 4567.'; },
        select: function (v) { return v !== '' || 'Please choose an option from the list.'; },
        text: function (min, max) {
            return function (v) {
                return (v.length >= min && v.length <= max) || 'Please enter between ' + min + ' and ' + max + ' characters (currently ' + v.length + ').';
            };
        },
        date: function (v) {
            if (v === '') { return true; }
            var today = new Date().toISOString().slice(0, 10);
            var max = new Date(Date.now() + 2 * 365 * 864e5).toISOString().slice(0, 10);
            return (v >= today && v <= max) || 'Choose a date from today up to two years ahead.';
        }
    };
    function errEl(field) {
        var id = field.id + '-error', e = document.getElementById(id);
        if (!e) {
            e = document.createElement('span'); e.id = id; e.className = 'error'; e.setAttribute('role', 'alert');
            field.insertAdjacentElement('afterend', e);
            field.setAttribute('aria-describedby', id);
        }
        return e;
    }
    function check(field, rule) {
        var r = rule(field.value.trim()), e = errEl(field), ok = r === true;
        e.textContent = ok ? '' : r;
        field.classList.toggle('invalid', !ok);
        field.classList.toggle('valid', ok && field.value.trim() !== '');
        field.setAttribute('aria-invalid', String(!ok));
        return ok;
    }
    function checkRadios(form, group) {
        var ok = !!$('input[name="mode"]:checked', form), box = $('#' + group, form), e = $('.error', box);
        if (!e) { e = document.createElement('span'); e.className = 'error'; e.setAttribute('role', 'alert'); box.appendChild(e); }
        e.textContent = ok ? '' : 'Please choose a study mode.';
        return ok;
    }
    function bind(form, rules) {
        form.setAttribute('novalidate', 'novalidate'); // JS messages replace the browser pop-ups
        rules.forEach(function (r) {
            var f = $('#' + r[0], form);
            f.addEventListener('blur', function () { check(f, r[1]); });
            f.addEventListener('input', function () { if (f.classList.contains('invalid')) { check(f, r[1]); } });
        });
        $$('textarea[maxlength]', form).forEach(function (t) {
            var c = document.createElement('span'); c.className = 'counter'; t.insertAdjacentElement('afterend', c);
            var up = function () { c.textContent = t.value.length + ' / ' + t.maxLength + ' characters'; };
            t.addEventListener('input', up); up();
            form.addEventListener('reset', function () { setTimeout(up, 0); });
        });
        form.addEventListener('reset', function () {
            $$('.error, .counter + .error', form).forEach(function (e) { if (!e.classList.contains('counter')) { e.textContent = ''; } });
            $$('.valid, .invalid', form).forEach(function (f) { f.classList.remove('valid', 'invalid'); f.removeAttribute('aria-invalid'); });
            var out = form.parentElement.parentElement.querySelector('.response'); if (out) { out.hidden = true; }
        });
    }
    function runAll(form, rules, extra) {
        var first = null;
        rules.forEach(function (r) {
            var f = $('#' + r[0], form);
            if (!check(f, r[1]) && !first) { first = f; }
        });
        if (extra && !extra() && !first) { first = $('input[name="mode"]', form); }
        if (first) { first.focus(); return false; }
        return true;
    }

    /* ---------- Enquiry form: validate, process, respond ---------- */
    function initEnquiry() {
        var form = $('#enquiry-form'); if (!form) { return; }
        var out = $('#enquiry-response');
        var rules = [['fullName', V.name], ['email', V.email], ['phone', V.phone], ['course', V.select],
                     ['startDate', V.date], ['experience', V.text(0, 300)], ['message', V.text(10, 500)]];
        bind(form, rules);
        $('#startDate').min = new Date().toISOString().slice(0, 10);
        $$('input[name="mode"]', form).forEach(function (r) { r.addEventListener('change', function () { checkRadios(form, 'mode-group'); }); });
        var pre = new URLSearchParams(location.search).get('course'); // preselect from the courses page
        if (pre && COURSES.some(function (c) { return c.id === pre; })) { $('#course').value = pre; }
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!runAll(form, rules, function () { return checkRadios(form, 'mode-group'); })) { return; }
            var btn = $('button[type="submit"]', form); btn.disabled = true; btn.textContent = 'Processing…';
            setTimeout(function () {
                var c = COURSES.filter(function (x) { return x.id === $('#course').value; })[0];
                var m = MODE[$('input[name="mode"]:checked', form).value];
                var fee = c.fee * m.factor, start = $('#startDate').value;
                var note = (start && start > c.intake) ? 'Your preferred date is after the next intake, so we will confirm a later group with you.'
                         : (start ? 'Your preferred date is before the next intake, so you would join the intake on ' + longDate(c.intake) + '.' : '');
                var seats = c.seats <= 5 ? 'Limited availability: only ' + c.seats + ' seats left' : c.seats + ' seats available';
                out.innerHTML = '<h2>Thank you, ' + esc($('#fullName').value.trim().split(' ')[0]) + '!</h2>' +
                    '<p>Here is the information for <strong>' + esc(c.title) + '</strong> (' + m.label + '):</p>' +
                    '<dl><dt>Course fee</dt><dd>' + rand(fee) + '</dd><dt>Once-off registration fee</dt><dd>' + rand(REG_FEE) + '</dd>' +
                    '<dt>Estimated total</dt><dd><strong>' + rand(fee + REG_FEE) + '</strong></dd>' +
                    '<dt>Duration</dt><dd>' + c.weeks + ' weeks</dd><dt>Next intake</dt><dd>' + longDate(c.intake) + '</dd>' +
                    '<dt>Availability</dt><dd>' + seats + '</dd></dl>' +
                    (note ? '<p>' + esc(note) + '</p>' : '') +
                    '<p>We will also reply to <strong>' + esc($('#email').value.trim()) + '</strong> about your enquiry.</p>';
                out.hidden = false; out.focus(); out.scrollIntoView({ behavior: 'smooth', block: 'start' });
                btn.disabled = false; btn.textContent = 'Submit Enquiry';
            }, 600);
        });
    }

    /* ---------- Contact form: validate, compile email, send ---------- */
    function initContact() {
        var form = $('#contact-form'); if (!form) { return; }
        var out = $('#contact-response');
        var rules = [['contactName', V.name], ['contactEmail', V.email], ['contactPhone', V.phone],
                     ['contactType', V.select], ['contactMessage', V.text(10, 1000)]];
        bind(form, rules);
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!runAll(form, rules)) { return; }
            var type = $('#contactType').value, name = $('#contactName').value.trim(), email = $('#contactEmail').value.trim();
            var phone = $('#contactPhone').value.trim() || 'Not provided', msg = $('#contactMessage').value.trim();
            var subject = type + ' from ' + name;
            var body = 'Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nType: ' + type + '\n\nMessage:\n' + msg;
            var href = 'mailto:' + RECIPIENT + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
            out.innerHTML = '<h2>Your email is ready</h2><p>Your details were checked and compiled into an email to <strong>' + esc(RECIPIENT) + '</strong>.</p>' +
                '<pre class="email-preview">' + esc('Subject: ' + subject + '\n\n' + body) + '</pre>' +
                '<p><a class="button button-primary" href="' + href + '">Open in my email app and send</a></p>' +
                '<p>If nothing opens, click the button above or copy the message and email us directly.</p>';
            out.hidden = false; out.focus(); out.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.location.href = href;
        });
    }

    /* ---------- Interactive map (Leaflet + OpenStreetMap) ---------- */
    function initMap() {
        var box = $('#map'); if (!box || typeof window.L === 'undefined') { return; }
        box.innerHTML = '';
        var pos = [-26.1076, 28.0567];
        var map = window.L.map(box, { scrollWheelZoom: false }).setView(pos, 15);
        window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        window.L.marker(pos).addTo(map).bindPopup('<strong>NextGen Coders Academy</strong><br>12 Innovation Drive, Sandton').openPopup();
        map.on('focus', function () { map.scrollWheelZoom.enable(); });
        map.on('blur', function () { map.scrollWheelZoom.disable(); });
    }

    function init() {
        initReveal(); initBackToTop(); initAccordion(); initLightbox();
        initCourses(); initEnquiry(); initContact(); initMap();
    }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
