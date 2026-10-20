/* Sonora: a self-contained music-library and original ambient-preview demo. */
(() => {
  'use strict';

  const ICONS = {
    'home': '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10Z"/>',
    'search': '<circle cx="10.8" cy="10.8" r="7.2"/><path d="m16.2 16.2 5 5"/>',
    'browse': '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    'library': '<path d="M3 4.5v15M8 4.5v15M13 4.5v15M17.3 6l3.8 13.2"/><path d="M2 20.5h12M16 20.5h7"/>',
    'collection': '<rect x="2.5" y="4" width="8" height="16" rx="1.6"/><rect x="13.5" y="4" width="8" height="16" rx="1.6"/><path d="M5 8h3m8 0h3M5 16h3m8 0h3"/>',
    'sonora-mark': '<path d="M3.5 14v-4m4 8V6m4 10V8m4 10V6m4 8v-4" stroke-width="2.6"/>',
    'plus': '<path d="M12 5v14M5 12h14"/>',
    'plus-circle': '<circle cx="12" cy="12" r="9.3"/><path d="M12 8v8M8 12h8"/>',
    'check-circle': '<circle cx="12" cy="12" r="9.3"/><path d="m8 12 2.7 2.7L16.5 9"/>',
    'check': '<path d="m5 12 4 4L19 6"/>',
    'close': '<path d="M5 5 19 19M19 5 5 19"/>',
    'arrow-right': '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    'arrow-up-right': '<path d="M6 18 18 6M8 6h10v10"/>',
    'chevron-left': '<path d="m14.5 5-7 7 7 7"/>',
    'chevron-right': '<path d="m9.5 5 7 7-7 7"/>',
    'download': '<path d="M12 3v12m-4-4 4 4 4-4M4 17v3h16v-3"/>',
    'download-circle': '<circle cx="12" cy="12" r="9"/><path d="M12 6v9m-3-3 3 3 3-3M8.5 18h7"/>',
    'bell': '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 10h18c0-2-3-3-3-10ZM10 21h4"/>',
    'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
    'moon': '<path d="M20.4 15.1A8.5 8.5 0 0 1 8.9 3.6a8.5 8.5 0 1 0 11.5 11.5Z"/>',
    'monitor': '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8m-4-3v3"/>',
    'more': '<circle cx="5" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.2" fill="currentColor" stroke="none"/>',
    'clock': '<circle cx="12" cy="12" r="9"/><path d="M12 6.5V12l3.5 2"/>',
    'play-fill': '<path d="M7.5 4.8v14.4c0 .7.7 1.1 1.3.7l11-7.2a.85.85 0 0 0 0-1.4l-11-7.2c-.6-.4-1.3 0-1.3.7Z" fill="currentColor" stroke="none"/>',
    'pause-fill': '<rect x="6" y="4.5" width="4.1" height="15" rx=".8" fill="currentColor" stroke="none"/><rect x="13.9" y="4.5" width="4.1" height="15" rx=".8" fill="currentColor" stroke="none"/>',
    'previous': '<path d="M4.5 5v14"/><path d="M18.6 5.5 7.8 11.4a.7.7 0 0 0 0 1.2l10.8 5.9a.7.7 0 0 0 1-.6V6.1a.7.7 0 0 0-1-.6Z" fill="currentColor" stroke="none"/>',
    'next': '<path d="M19.5 5v14"/><path d="M5.4 5.5 16.2 11.4a.7.7 0 0 1 0 1.2L5.4 18.5a.7.7 0 0 1-1-.6V6.1a.7.7 0 0 1 1-.6Z" fill="currentColor" stroke="none"/>',
    'shuffle': '<path d="M3 6h2c6 0 8 12 14 12h2m-4-3 4 3-4 3M3 18h2c2.8 0 4.8-2.4 6.5-5M15.5 9C17 7.2 18.4 6 21 6m-4-3 4 3-4 3"/>',
    'repeat': '<path d="M17 3 21 7l-4 4M3 11V9a2 2 0 0 1 2-2h16M7 21l-4-4 4-4m14 0v2a2 2 0 0 1-2 2H3"/>',
    'repeat-one': '<path d="M17 3 21 7l-4 4M3 11V9a2 2 0 0 1 2-2h16M7 21l-4-4 4-4m14 0v2a2 2 0 0 1-2 2H3"/><path d="M12 10v5m-1.5-4L12 10" stroke-width="1.5"/>',
    'heart': '<path d="M20.7 5.3a5.2 5.2 0 0 0-7.4 0L12 6.6l-1.3-1.3a5.2 5.2 0 0 0-7.4 7.4L12 21l8.7-8.3a5.2 5.2 0 0 0 0-7.4Z"/>',
    'heart-fill': '<path d="M20.7 5.3a5.2 5.2 0 0 0-7.4 0L12 6.6l-1.3-1.3a5.2 5.2 0 0 0-7.4 7.4L12 21l8.7-8.3a5.2 5.2 0 0 0 0-7.4Z" fill="currentColor" stroke="none"/>',
    'list': '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    'queue': '<path d="M3 6h13M3 11h13M3 16h9m6-2 4 3-4 3v-6Z"/>',
    'now-playing': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M10 8.5v7l5-3.5-5-3.5Z"/>',
    'devices': '<rect x="2" y="3" width="16" height="12" rx="1.4"/><path d="M8 19h10M4 19h1m13-10h4v11h-6V9z"/>',
    'volume': '<path d="M4 9v6h4l5 4V5L8 9H4ZM16 9a4 4 0 0 1 0 6m2.5-9a8 8 0 0 1 0 12"/>',
    'volume-low': '<path d="M4 9v6h4l5 4V5L8 9H4ZM16 9a4 4 0 0 1 0 6"/>',
    'volume-off': '<path d="M4 9v6h4l5 4V5L8 9H4Zm12 1 5 5m0-5-5 5"/>',
    'expand': '<path d="M9 3H3v6m0-6 7 7m5-7h6v6m0-6-7 7M3 15v6h6m-6 0 7-7m11 1v6h-6m6 0-7-7"/>',
    'pin': '<path d="M8 3h8l-1 6 3 3v2H6v-2l3-3-1-6ZM12 14v7"/>',
    'music': '<path d="M9 18V5l11-2v13M9 18c0 1.7-1.6 3-3.6 3S2 19.7 2 18s1.6-3 3.4-3S9 16.3 9 18Zm11-2c0 1.7-1.6 3-3.5 3S13 17.7 13 16s1.6-3 3.5-3S20 14.3 20 16Z"/>',
    'link': '<path d="M9 15 15 9m-4.5-3 1.3-1.3a4 4 0 0 1 5.7 5.7L16 12m-8 0-1.5 1.5a4 4 0 0 0 5.7 5.7L13.5 17"/>'
  };
  const icon = (name) => `<svg class="icon icon-${name}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.music}</svg>`;
  const $ = (selector) => document.querySelector(selector);
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  const ASSET = './assets/';

  const tracks = [
    { id: 'slow-motion', title: 'Slow Motion', artist: 'Juno Sol', album: 'The Long Way Home', added: 'Oct 12, 2026', seconds: 218, image: ASSET + 'slow-motion.jpg', preview: ASSET + 'preview-dusk.wav', lyrics: ['Let the world turn', 'in slow motion', 'while the light stays gold.', 'We can take the long way home', 'and let the night unfold.', 'No need to be anywhere', 'when we are already here.'] },
    { id: 'somewhere-sun', title: 'Somewhere in the Sun', artist: 'Aiden Lane', album: 'Coastline', added: 'Oct 10, 2026', seconds: 203, image: ASSET + 'golden-hour.jpg', preview: ASSET + 'preview-warm.wav', lyrics: ['Somewhere in the sun', 'there is room for us', 'to breathe a little slower.', 'The afternoon goes on', 'like it could last forever.'] },
    { id: 'on-my-mind', title: 'On My Mind', artist: 'The Sunday Club', album: 'Little Things', added: 'Oct 10, 2026', seconds: 231, image: ASSET + 'cover-little-things.svg', preview: ASSET + 'preview-warm.wav' },
    { id: 'tangerine-skies', title: 'Tangerine Skies', artist: 'Noa Bloom', album: 'Bloom', added: 'Oct 08, 2026', seconds: 186, image: ASSET + 'cover-bloom.svg', preview: ASSET + 'preview-warm.wav' },
    { id: 'easy-does-it', title: 'Easy Does It', artist: 'Eden Grey', album: 'Soft Places', added: 'Oct 07, 2026', seconds: 225, image: ASSET + 'cover-soft-places.svg', preview: ASSET + 'preview-blue.wav' },
    { id: 'while-young', title: "While We're Young", artist: 'Milo Hart', album: 'After Hours', added: 'Oct 05, 2026', seconds: 199, image: ASSET + 'cover-after-hours.svg', preview: ASSET + 'preview-dusk.wav' },
    { id: 'stay-for-a-while', title: 'Stay for a While', artist: 'Ela Vale', album: 'Little Things', added: 'Oct 03, 2026', seconds: 214, image: ASSET + 'cover-little-things.svg', preview: ASSET + 'preview-warm.wav' },
    { id: 'the-way-home', title: 'The Way Home', artist: 'Juno Sol', album: 'The Long Way Home', added: 'Oct 01, 2026', seconds: 206, image: ASSET + 'slow-motion.jpg', preview: ASSET + 'preview-dusk.wav' },
    { id: 'first-light', title: 'First Light', artist: 'Noa Bloom', album: 'Bloom', added: 'Sep 28, 2026', seconds: 180, image: ASSET + 'cover-bloom.svg', preview: ASSET + 'preview-warm.wav' },
    { id: 'honey-haze', title: 'Honey & Haze', artist: 'Aiden Lane', album: 'Coastline', added: 'Sep 26, 2026', seconds: 243, image: ASSET + 'golden-hour.jpg', preview: ASSET + 'preview-warm.wav' },
    { id: 'all-the-colors', title: 'All the Colors', artist: 'The Sunday Club', album: 'Little Things', added: 'Sep 24, 2026', seconds: 201, image: ASSET + 'cover-little-things.svg', preview: ASSET + 'preview-warm.wav' },
    { id: 'everything-goes', title: 'Everything Goes', artist: 'Silas Reed', album: 'Blue Hour', added: 'Sep 21, 2026', seconds: 228, image: ASSET + 'blue-hour.jpg', preview: ASSET + 'preview-blue.wav' },
    { id: 'midnight-radio', title: 'Midnight Radio', artist: 'Juno Sol', album: 'After Hours', added: 'Sep 19, 2026', seconds: 237, image: ASSET + 'cover-after-hours.svg', preview: ASSET + 'preview-dusk.wav' },
    { id: 'almost-there', title: 'Almost There', artist: 'Ela Vale', album: 'Soft Places', added: 'Sep 16, 2026', seconds: 211, image: ASSET + 'cover-soft-places.svg', preview: ASSET + 'preview-blue.wav' },
    { id: 'quiet-tides', title: 'Quiet Tides', artist: 'Silas Reed', album: 'Blue Hour', added: 'Sep 12, 2026', seconds: 208, image: ASSET + 'blue-hour.jpg', preview: ASSET + 'preview-blue.wav' },
    { id: 'another-life', title: 'Another Life', artist: 'Milo Hart', album: 'After Hours', added: 'Sep 09, 2026', seconds: 222, image: ASSET + 'cover-after-hours.svg', preview: ASSET + 'preview-dusk.wav' }
  ];

  const catalog = {
    golden: { name: 'golden hour', type: 'Playlist', owner: 'sonora', description: 'For that last stretch of daylight.', image: ASSET + 'golden-hour.jpg', count: '8,482 saves', pinned: true, top: '#e2b86b', mid: '#866433', bottom: '#3b2d1d', tint: 'rgba(139, 99, 41, .31)', ids: tracks.map((t) => t.id) },
    liked: { name: 'Liked Songs', type: 'Playlist', owner: 'You', description: 'The songs you keep coming back to.', image: ASSET + 'cover-liked.svg', pinned: true, top: '#8a70cb', mid: '#564789', bottom: '#282636', tint: 'rgba(79, 68, 121, .3)', ids: [] },
    drives: { name: 'late night drives', type: 'Playlist', owner: 'sonora', description: 'After dark, on the long way home.', image: ASSET + 'slow-motion.jpg', count: '3,216 saves', top: '#a87d86', mid: '#654050', bottom: '#27202c', tint: 'rgba(111, 65, 85, .31)', ids: ['slow-motion', 'the-way-home', 'midnight-radio', 'while-young', 'another-life', 'almost-there', 'everything-goes', 'quiet-tides'] },
    blue: { name: 'blue hour', type: 'Playlist', owner: 'sonora', description: 'For the quiet between day and night.', image: ASSET + 'blue-hour.jpg', count: '2,541 saves', top: '#748eb6', mid: '#34496d', bottom: '#182238', tint: 'rgba(40, 75, 118, .3)', ids: ['quiet-tides', 'everything-goes', 'almost-there', 'easy-does-it', 'another-life', 'midnight-radio', 'slow-motion'] },
    soft: { name: 'soft focus', type: 'Playlist', owner: 'sonora', description: 'Take a breath. Put this on.', image: ASSET + 'cover-soft-places.svg', count: '1,908 saves', top: '#b4ad81', mid: '#697052', bottom: '#293529', tint: 'rgba(78, 96, 63, .29)', ids: ['easy-does-it', 'stay-for-a-while', 'on-my-mind', 'somewhere-sun', 'first-light', 'all-the-colors', 'almost-there', 'honey-haze'] },
    juno: { name: 'Juno Sol', type: 'Artist', owner: 'Artist', description: 'The sound of taking the long way home.', image: ASSET + 'slow-motion.jpg', count: '214K monthly listeners', top: '#ae8084', mid: '#624151', bottom: '#2a202a', tint: 'rgba(102, 63, 76, .32)', ids: ['slow-motion', 'the-way-home', 'midnight-radio'] },
    bloom: { name: 'Bloom', type: 'Album', owner: 'Noa Bloom', description: 'An album for the days you want to remember.', image: ASSET + 'cover-bloom.svg', count: '2026', top: '#e3ae7c', mid: '#a9694c', bottom: '#48312a', tint: 'rgba(150, 80, 47, .3)', ids: ['tangerine-skies', 'first-light'] }
  };
  const libraryOrder = ['golden', 'liked', 'drives', 'blue', 'soft', 'juno', 'bloom'];
  const byId = (id) => tracks.find((track) => track.id === id);
  const playlistTracks = (id = state.playlistId) => id === 'liked' ? [...state.liked].map(byId).filter(Boolean) : (catalog[id]?.ids || []).map(byId).filter(Boolean);
  const currentTrack = () => byId(state.trackId) || tracks[0];
  const formatTime = (seconds) => `${Math.floor(Math.max(0, seconds || 0) / 60)}:${String(Math.floor(Math.max(0, seconds || 0) % 60)).padStart(2, '0')}`;
  const durationLabel = (songs) => {
    const minutes = Math.round(songs.reduce((sum, track) => sum + (track.seconds || 0), 0) / 60);
    return minutes >= 54 ? 'about 1 hr' : `${minutes} min`;
  };
  const themeMedia = window.matchMedia('(prefers-color-scheme: light)');
  function savedThemeChoice() {
    try {
      const choice = localStorage.getItem('sonora-theme');
      return ['dark', 'light', 'system'].includes(choice) ? choice : 'dark';
    } catch (_) { return 'dark'; }
  }
  const state = {
    playlistId: 'golden', trackId: 'slow-motion', playing: false, elapsed: 42,
    liked: new Set(['somewhere-sun', 'tangerine-skies', 'slow-motion']),
    saved: new Set(libraryOrder), filter: null, librarySort: 0, libraryQuery: '',
    playlistQuery: '', compact: false, lyricsExpanded: false,
    shuffle: false, repeat: 0, volume: 70, muted: false,
    themeChoice: savedThemeChoice(),
    rightOpen: window.innerWidth > 990, libraryCollapsed: false, searchOpen: false,
    history: ['golden'], historyIndex: 0
  };
  const audio = $('#audio-element');
  let toastTimeout;
  let audioSrcId = '';

  function hydrateStaticIcons() {
    document.querySelectorAll('[data-icon]').forEach((holder) => {
      holder.innerHTML = icon(holder.dataset.icon);
    });
  }
  function swapIcon(selector, name) {
    const target = $(selector)?.querySelector('.icon');
    if (target) target.outerHTML = icon(name);
  }
  function applyTheme(choice, remember = true) {
    if (!['dark', 'light', 'system'].includes(choice)) return;
    state.themeChoice = choice;
    const effective = choice === 'system' ? (themeMedia.matches ? 'light' : 'dark') : choice;
    document.documentElement.dataset.theme = effective;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', effective === 'light' ? '#e9e6e0' : '#0c0d0f');
    document.querySelectorAll('[data-theme-choice]').forEach((option) => {
      const selected = option.dataset.themeChoice === choice;
      option.classList.toggle('selected', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
    const label = choice === 'system' ? `System (${effective})` : choice[0].toUpperCase() + choice.slice(1);
    $('#theme-button').setAttribute('aria-label', `Change theme. Current: ${label}`);
    $('#theme-button').title = `Appearance: ${label}`;
    swapIcon('#theme-button', choice === 'system' ? 'monitor' : choice === 'light' ? 'sun' : 'moon');
    if (remember) {
      try { localStorage.setItem('sonora-theme', choice); } catch (_) { /* Private browsing can disable storage. */ }
    }
  }
  function showThemeMenu(open) {
    $('#theme-menu').hidden = !open;
    $('#theme-button').setAttribute('aria-expanded', String(open));
  }
  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3100);
  }

  function renderHero() {
    const playlist = catalog[state.playlistId];
    if (!playlist) return;
    const songs = playlistTracks();
    const hero = $('#playlist-hero');
    const center = $('#center-panel');
    for (const [name, value] of Object.entries({ '--hero-top': playlist.top, '--hero-mid': playlist.mid, '--hero-bottom': playlist.bottom, '--body-tint': playlist.tint })) center.style.setProperty(name, value);
    const longTitle = playlist.name.length > 13 ? ' long-title' : '';
    const count = `${songs.length} ${songs.length === 1 ? 'song' : 'songs'}`;
    const sub = playlist.type === 'Artist' ? playlist.count : playlist.type === 'Album' ? `${playlist.count} · ${count}, ${durationLabel(songs)}` : `${playlist.count ? playlist.count + ' · ' : ''}${count}, ${durationLabel(songs)}`;
    hero.innerHTML = `
      <div class="hero-overline"><span>COLLECTION <span class="hero-overline-divider">/</span> ${esc(playlist.type)}</span><span class="hero-overline-right">${String(libraryOrder.indexOf(state.playlistId) + 1).padStart(2, '0')} <span class="hero-overline-divider">/</span> ${String(libraryOrder.length).padStart(2, '0')}</span></div>
      <img class="hero-cover" src="${esc(playlist.image)}" alt="${esc(playlist.name)} cover art" />
      <div class="hero-copy">
        <p class="hero-kind">${esc(playlist.type)}</p>
        <h1 class="hero-title${longTitle}">${esc(playlist.name)}</h1>
        <p class="hero-description">${esc(playlist.description)}</p>
        <div class="hero-metadata"><span class="hero-curator-mark" aria-hidden="true">${icon('sonora-mark')}</span><strong>${esc(playlist.owner)}</strong><span class="metadata-dot">·</span><span>${esc(sub)}</span></div>
      </div>`;
    $('#save-playlist').classList.toggle('saved', state.saved.has(state.playlistId));
    swapIcon('#save-playlist', state.saved.has(state.playlistId) ? 'check-circle' : 'plus-circle');
    $('#save-playlist').title = state.saved.has(state.playlistId) ? 'Remove from Your Library' : 'Save to Your Library';
    $('#save-playlist').setAttribute('aria-label', $('#save-playlist').title);
  }

  function libraryItems() {
    let ids = libraryOrder.filter((id) => state.saved.has(id));
    if (state.filter) ids = ids.filter((id) => catalog[id].type === state.filter.slice(0, -1));
    if (state.libraryQuery.trim()) ids = ids.filter((id) => `${catalog[id].name} ${catalog[id].owner} ${catalog[id].type}`.toLowerCase().includes(state.libraryQuery.trim().toLowerCase()));
    if (state.librarySort === 1) ids.sort((a, b) => catalog[a].name.localeCompare(catalog[b].name));
    if (state.librarySort === 2) ids.sort((a, b) => catalog[a].type.localeCompare(catalog[b].type) || catalog[a].name.localeCompare(catalog[b].name));
    return ids;
  }
  function renderLibrary() {
    document.querySelectorAll('.filter-chip').forEach((chip) => chip.classList.toggle('selected', chip.dataset.filter === state.filter));
    const ids = libraryItems();
    $('#library-list').innerHTML = ids.length ? ids.map((id) => {
      const item = catalog[id];
      const sub = item.type === 'Artist' ? 'Artist' : item.type === 'Album' ? `Album · ${item.owner}` : `Playlist · ${item.owner}`;
      return `<button class="library-item${state.playlistId === id ? ' selected' : ''}" data-playlist="${esc(id)}" role="listitem" aria-label="Open ${esc(item.name)}" title="${esc(item.name)}">
        <img class="library-art${item.type === 'Artist' ? ' artist' : ''}" src="${esc(item.image)}" alt="" loading="lazy" />
        <span class="library-item-copy"><span class="library-item-name">${esc(item.name)}</span><span class="library-item-sub">${item.pinned ? `<span class="pin-icon">${icon('pin')}</span>` : ''}${esc(sub)}</span></span>
      </button>`;
    }).join('') : '<div class="library-empty">Nothing here yet.<br />Try a different filter or import your music.</div>';
  }

  function renderTracks() {
    const songs = playlistTracks().filter((track) => `${track.title} ${track.artist} ${track.album}`.toLowerCase().includes(state.playlistQuery.trim().toLowerCase()));
    $('#track-list').innerHTML = songs.length ? songs.map((track, index) => {
      const current = track.id === state.trackId;
      const liked = state.liked.has(track.id);
      const indexMarkup = current
        ? `<span class="playing-bars${state.playing ? ' is-playing' : ''}" aria-label="Current track"><i></i><i></i><i></i></span>`
        : `<span class="track-index-number">${index + 1}</span>`;
      return `<div class="track-row track-grid${current ? ' current' : ''}" role="listitem" tabindex="0" data-track="${esc(track.id)}" aria-label="Play ${esc(track.title)} by ${esc(track.artist)}">
        <div class="track-index">${indexMarkup}<span class="track-index-play">${icon('play-fill')}</span></div>
        <div class="track-primary"><img class="track-art" src="${esc(track.image)}" alt="" loading="lazy" /><div class="track-copy"><span class="track-title">${esc(track.title)}</span><span class="track-artist">${esc(track.artist)}</span></div></div>
        <div class="track-album column-album" title="${esc(track.album)}">${esc(track.album)}</div>
        <div class="track-added column-added">${esc(track.added)}</div>
        <div class="track-duration"><button class="row-like${liked ? ' liked' : ''}" data-like="${esc(track.id)}" aria-label="${liked ? 'Remove ' + esc(track.title) + ' from' : 'Add ' + esc(track.title) + ' to'} Liked Songs" title="${liked ? 'Remove from' : 'Add to'} Liked Songs">${icon(liked ? 'heart-fill' : 'heart')}</button><span class="track-length">${track.seconds ? formatTime(track.seconds) : '--:--'}</span></div>
      </div>`;
    }).join('') : `<div class="track-empty">${state.playlistQuery ? 'No matching songs in this playlist.' : 'No songs here yet. Give a few tracks a like!'}</div>`;
    $('#tracks-wrap').classList.toggle('compact-tracks', state.compact);
    $('#track-list-footer').textContent = songs.length ? `End of playlist · ${songs.length} tracks` : '';
  }

  function nextInPlaylist() {
    const songs = playlistTracks();
    const index = songs.findIndex((song) => song.id === state.trackId);
    return songs.length > 1 ? songs[(index + 1) % songs.length] : songs[0] || null;
  }
  function renderNow() {
    const track = currentTrack();
    const next = nextInPlaylist();
    const liked = state.liked.has(track.id);
    const lyrics = track.local ? ['Your music, your moment.', 'Lyrics aren\'t available', 'for local tracks.'] : (track.lyrics || [
      'Take a little time', 'to let the world go by.', 'Here in this moment', 'the light is on our side.', 'And if the day gets quiet', 'we can stay a little while.'
    ]);
    const label = playlistTracks().some((song) => song.id === track.id) ? catalog[state.playlistId].name : track.album;
    $('#now-content').innerHTML = `<img class="now-cover" src="${esc(track.image)}" alt="Cover art for ${esc(track.title)}" />
      <div class="now-track-info"><div class="now-track-text"><h2 class="now-track-title" title="${esc(track.title)}">${esc(track.title)}</h2><p class="now-track-artist">${esc(track.artist)}</p></div><button class="now-like${liked ? ' liked' : ''}" data-now-like="${esc(track.id)}" aria-label="${liked ? 'Remove from' : 'Add to'} Liked Songs" title="${liked ? 'Remove from' : 'Add to'} Liked Songs">${icon(liked ? 'heart-fill' : 'heart')}</button></div>
      <div class="now-from">${icon('music')} FROM ${esc(label)}</div>
      <div class="lyrics-card"><div class="lyrics-heading"><span>Lyrics</span></div><div class="lyrics-lines${state.lyricsExpanded ? ' expanded' : ''}">${lyrics.map((line, index) => `<p class="lyrics-line${index > 2 ? ' dim' : ''}">${esc(line)}</p>`).join('')}</div>${lyrics.length > 3 ? `<button class="lyrics-more" data-lyrics-toggle>${state.lyricsExpanded ? 'Show less' : 'Show more'}</button>` : ''}</div>
      ${next ? `<div class="up-next-card"><div class="up-next-heading"><strong>Up next</strong><button data-open-queue>Open queue</button></div><button class="up-next-row" data-up-next="${esc(next.id)}" aria-label="Play ${esc(next.title)} next"><img src="${esc(next.image)}" alt="" /><span class="up-next-copy"><strong>${esc(next.title)}</strong><small>${esc(next.artist)}</small></span><span class="up-next-arrow">${icon('arrow-right')}</span></button></div>` : ''}`;
  }
  function renderFooter() {
    const track = currentTrack();
    const liked = state.liked.has(track.id);
    $('#footer-track').innerHTML = `<img class="footer-art" src="${esc(track.image)}" alt="${esc(track.title)} cover art" /><div class="footer-track-copy"><button class="footer-track-title" id="footer-song-title" title="${esc(track.title)}">${esc(track.title)}</button><span class="footer-track-artist">${esc(track.artist)}</span></div><button class="footer-like${liked ? ' liked' : ''}" id="footer-like" aria-label="${liked ? 'Remove from' : 'Add to'} Liked Songs" title="${liked ? 'Remove from' : 'Add to'} Liked Songs">${icon(liked ? 'heart-fill' : 'heart')}</button>`;
    $('#footer-like').addEventListener('click', () => toggleLike(state.trackId));
    $('#footer-song-title').addEventListener('click', () => { setRightOpen(true); $('#now-panel').scrollTo({ top: 0, behavior: 'smooth' }); });
    updateProgress();
  }
  function renderControls() {
    const name = state.playing ? 'pause-fill' : 'play-fill';
    swapIcon('#play-button', name);
    swapIcon('#hero-play', name);
    $('#play-button').setAttribute('aria-label', state.playing ? 'Pause' : 'Play');
    $('#hero-play').setAttribute('aria-label', state.playing ? 'Pause playlist' : 'Play playlist');
    $('#shuffle-button').classList.toggle('active', state.shuffle);
    $('#shuffle-button').setAttribute('aria-label', state.shuffle ? 'Shuffle on' : 'Shuffle off');
    $('#repeat-button').classList.toggle('active', state.repeat > 0);
    $('#repeat-button').setAttribute('aria-label', ['Repeat off', 'Repeat all', 'Repeat one'][state.repeat]);
    swapIcon('#repeat-button', state.repeat === 2 ? 'repeat-one' : 'repeat');
    $('#toggle-now').classList.toggle('active', state.rightOpen);
    $('#toggle-now').setAttribute('aria-label', state.rightOpen ? 'Hide now playing' : 'Show now playing');
    swapIcon('#mute-button', state.muted || state.volume === 0 ? 'volume-off' : state.volume < 38 ? 'volume-low' : 'volume');
    $('#mute-button').setAttribute('aria-label', state.muted || state.volume === 0 ? 'Unmute' : 'Mute');
    $('#volume-slider').style.setProperty('--fill', (state.muted ? 0 : state.volume) + '%');
  }
  function updateProgress() {
    const track = currentTrack();
    const duration = track.seconds || 0;
    const percent = duration ? Math.min(100, Math.max(0, state.elapsed / duration * 100)) : 0;
    $('#elapsed-time').textContent = formatTime(state.elapsed);
    $('#total-time').textContent = duration ? formatTime(duration) : '--:--';
    $('#progress-slider').value = percent;
    $('#progress-slider').style.setProperty('--fill', `${percent}%`);
  }
  function renderQueue() {
    const songs = playlistTracks();
    const index = songs.findIndex((song) => song.id === state.trackId);
    const upcoming = songs.length ? [...songs.slice(index + 1), ...songs.slice(0, Math.max(0, index))].slice(0, 10) : [];
    const track = currentTrack();
    $('#queue-content').innerHTML = `<p class="queue-section-title">Now playing</p>${queueRow(track, true)}<p class="queue-section-title">Next from ${esc(catalog[state.playlistId].name)}</p>${upcoming.length ? upcoming.map((song) => queueRow(song)).join('') : '<div class="library-empty">Nothing else in the queue.</div>'}`;
  }
  function queueRow(track, now = false) {
    return `<button class="queue-song${now ? ' now' : ''}" data-queue-track="${esc(track.id)}"><img src="${esc(track.image)}" alt="" /><span class="queue-song-copy"><strong>${esc(track.title)}</strong><small>${esc(track.artist)}</small></span></button>`;
  }
  function renderAll() { renderHero(); renderLibrary(); renderTracks(); renderNow(); renderFooter(); renderControls(); renderQueue(); updateHistoryButtons(); }

  function setAudioSource(track) {
    if (audioSrcId === track.id) return;
    audio.pause();
    audio.src = track.preview;
    audio.loop = !track.local;
    audio.volume = state.volume / 100;
    audio.muted = state.muted;
    audioSrcId = track.id;
  }
  function startAudio() {
    setAudioSource(currentTrack());
    const result = audio.play();
    if (result && typeof result.catch === 'function') result.catch(() => {
      state.playing = false;
      renderControls();
      renderTracks();
      showToast('Audio could not be played in this browser.');
    });
  }
  function playTrack(id, autoplay = true) {
    const track = byId(id);
    if (!track) return;
    state.trackId = id;
    state.elapsed = 0;
    state.lyricsExpanded = false;
    state.playing = autoplay;
    setAudioSource(track);
    if (autoplay) startAudio();
    renderTracks(); renderNow(); renderFooter(); renderControls(); renderQueue();
  }
  function togglePlayback() {
    if (state.playing) {
      state.playing = false;
      audio.pause();
    } else {
      const songs = playlistTracks();
      if (!songs.some((song) => song.id === state.trackId) && songs.length) {
        playTrack(songs[0].id);
        return;
      }
      if (currentTrack().seconds && state.elapsed >= currentTrack().seconds) state.elapsed = 0;
      state.playing = true;
      startAudio();
    }
    renderControls(); renderTracks(); updateProgress();
  }
  function nextTrack(manual = true) {
    const songs = playlistTracks();
    if (!songs.length) return;
    const index = songs.findIndex((song) => song.id === state.trackId);
    if (state.shuffle && songs.length > 1) {
      const choices = songs.filter((song) => song.id !== state.trackId);
      playTrack(choices[Math.floor(Math.random() * choices.length)].id);
      return;
    }
    if (index === songs.length - 1 && !manual && state.repeat === 0) {
      audio.pause(); state.playing = false; state.elapsed = currentTrack().seconds;
      renderControls(); renderTracks(); updateProgress();
      return;
    }
    playTrack(songs[(index + 1 + songs.length) % songs.length].id);
  }
  function previousTrack() {
    if (state.elapsed > 3) {
      state.elapsed = 0;
      try { audio.currentTime = 0; } catch (_) { /* audio not loaded yet */ }
      updateProgress();
      return;
    }
    const songs = playlistTracks();
    if (!songs.length) return;
    const index = songs.findIndex((song) => song.id === state.trackId);
    playTrack(songs[(index - 1 + songs.length) % songs.length].id);
  }
  function toggleLike(id) {
    const track = byId(id);
    if (!track) return;
    const wasLiked = state.liked.has(id);
    if (wasLiked) state.liked.delete(id); else state.liked.add(id);
    renderTracks(); renderNow(); renderFooter(); renderQueue();
    if (state.playlistId === 'liked') renderHero();
    showToast(wasLiked ? 'Removed from Liked Songs' : 'Added to Liked Songs');
  }
  function setRightOpen(open) {
    state.rightOpen = open;
    $('#workspace').classList.toggle('show-right', open);
    renderControls();
  }

  function navigate(id, record = true) {
    if (!catalog[id]) return;
    state.playlistId = id;
    state.playlistQuery = '';
    $('#playlist-search-input').value = '';
    $('#playlist-search-input').classList.remove('open');
    if (record && state.history[state.historyIndex] !== id) {
      state.history = state.history.slice(0, state.historyIndex + 1);
      state.history.push(id);
      state.historyIndex = state.history.length - 1;
    }
    renderAll();
    $('#center-panel').scrollTop = 0;
    hideSearch();
  }
  function updateHistoryButtons() {
    $('#nav-back').disabled = state.historyIndex <= 0;
    $('#nav-forward').disabled = state.historyIndex >= state.history.length - 1;
  }
  function navigateHistory(direction) {
    const position = state.historyIndex + direction;
    if (position < 0 || position >= state.history.length) return;
    state.historyIndex = position;
    navigate(state.history[position], false);
  }

  function renderSearch() {
    const q = $('#global-search').value.trim().toLowerCase();
    const playlists = libraryOrder.filter((id) => `${catalog[id].name} ${catalog[id].owner} ${catalog[id].type}`.toLowerCase().includes(q)).slice(0, q ? 3 : 2);
    const songs = tracks.filter((track) => `${track.title} ${track.artist} ${track.album}`.toLowerCase().includes(q)).slice(0, q ? 5 : 3);
    const playlistMarkup = playlists.length ? `<div class="search-results-title">${q ? 'PLAYLISTS & MORE' : 'RECENTLY PLAYED'}</div>${playlists.map((id) => `<button class="search-result" data-search-playlist="${esc(id)}"><img src="${esc(catalog[id].image)}" alt="" /><span class="search-result-text"><strong>${esc(catalog[id].name)}</strong><small>${esc(catalog[id].type)} · ${esc(catalog[id].owner)}</small></span><span class="search-result-arrow">${icon('arrow-right')}</span></button>`).join('')}` : '';
    const songMarkup = songs.length ? `<div class="search-results-title">${q ? 'SONGS' : 'RECENT SONGS'}</div>${songs.map((song) => `<button class="search-result" data-search-track="${esc(song.id)}"><img src="${esc(song.image)}" alt="" /><span class="search-result-text"><strong>${esc(song.title)}</strong><small>Song · ${esc(song.artist)}</small></span><span class="search-result-arrow">${icon('play-fill')}</span></button>`).join('')}` : '';
    $('#search-results').innerHTML = playlistMarkup + songMarkup || '<div class="search-empty">Nothing found. Try another song, artist, or playlist.</div>';
    $('#search-results').hidden = !state.searchOpen;
  }
  function hideSearch() { state.searchOpen = false; $('#search-results').hidden = true; $('#global-search').blur(); }
  function toggleQueue(open) {
    $('#queue-overlay').hidden = !open;
    $('#queue-button').classList.toggle('active', open);
    if (open) renderQueue();
  }
  function exportTracklist() {
    const playlist = catalog[state.playlistId];
    const list = playlistTracks();
    const text = `${playlist.name} — Sonora\n${playlist.description}\n\n${list.map((song, index) => `${index + 1}. ${song.title} — ${song.artist} (${formatTime(song.seconds)})`).join('\n')}\n`;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${playlist.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-tracklist.txt`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 3000);
    showToast('Tracklist exported');
  }
  async function copyPlaylistLink() {
    const url = `${location.href.split('#')[0]}#playlist=${encodeURIComponent(state.playlistId)}`;
    try {
      await navigator.clipboard.writeText(url);
      showToast('Playlist link copied');
    } catch (_) {
      showToast('Copy this URL to share: ' + url);
    }
  }
  function importFiles(files) {
    const selected = [...files].filter((file) => file.type.startsWith('audio/') || /\.(mp3|wav|ogg|m4a|aac|flac|opus)$/i.test(file.name));
    if (!selected.length) { showToast('Choose an audio file to import.'); return; }
    if (!catalog.imports) {
      catalog.imports = { name: 'your imports', type: 'Playlist', owner: 'You', description: 'A home for the sounds you brought with you.', image: ASSET + 'cover-after-hours.svg', pinned: true, top: '#a782aa', mid: '#685070', bottom: '#2c2534', tint: 'rgba(112, 80, 116, .3)', ids: [] };
      libraryOrder.unshift('imports');
    }
    selected.forEach((file) => {
      const id = `import-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      tracks.push({ id, title: file.name.replace(/\.[^.]+$/, '').replace(/[_-]/g, ' '), artist: 'Your music', album: 'Your Imports', added: 'Today', seconds: 0, image: ASSET + 'cover-after-hours.svg', preview: URL.createObjectURL(file), local: true });
      catalog.imports.ids.push(id);
    });
    state.saved.add('imports');
    state.filter = null;
    navigate('imports');
    showToast(`${selected.length} ${selected.length === 1 ? 'song' : 'songs'} added to Your Library`);
    $('#file-input').value = '';
  }

  function attachEvents() {
    $('#brand-button').addEventListener('click', () => navigate('golden'));
    $('#home-button').addEventListener('click', () => navigate('golden'));
    $('#nav-back').addEventListener('click', () => navigateHistory(-1));
    $('#nav-forward').addEventListener('click', () => navigateHistory(1));
    $('#global-search').addEventListener('focus', () => { state.searchOpen = true; renderSearch(); });
    $('#global-search').addEventListener('input', renderSearch);
    $('#global-search').addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { hideSearch(); event.preventDefault(); }
      if (event.key === 'Enter') { const first = $('#search-results .search-result'); if (first) first.click(); }
    });
    $('#browse-button').addEventListener('click', () => { $('#global-search').focus(); });
    $('#search-results').addEventListener('click', (event) => {
      const playlistButton = event.target.closest('[data-search-playlist]');
      const trackButton = event.target.closest('[data-search-track]');
      if (playlistButton) navigate(playlistButton.dataset.searchPlaylist);
      if (trackButton) { playTrack(trackButton.dataset.searchTrack); hideSearch(); }
    });
    $('#premium-button').addEventListener('click', () => $('#global-search').focus());
    $('#install-button').addEventListener('click', () => $('#file-input').click());
    $('#theme-button').addEventListener('click', () => showThemeMenu($('#theme-menu').hidden));
    $('#theme-button').addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        showThemeMenu(true);
        $('#theme-menu .theme-option').focus();
      }
    });
    $('#theme-menu').addEventListener('click', (event) => {
      const option = event.target.closest('[data-theme-choice]');
      if (!option) return;
      applyTheme(option.dataset.themeChoice);
      showThemeMenu(false);
      $('#theme-button').focus({ preventScroll: true });
    });
    const followSystemTheme = () => {
      if (state.themeChoice === 'system') applyTheme('system', false);
    };
    if (typeof themeMedia.addEventListener === 'function') themeMedia.addEventListener('change', followSystemTheme);
    else if (typeof themeMedia.addListener === 'function') themeMedia.addListener(followSystemTheme);
    $('#notifications-button').addEventListener('click', () => showToast("You’re all caught up."));
    $('#avatar-button').addEventListener('click', () => showToast('Hey, S. Make yourself at home.'));

    $('#library-add').addEventListener('click', () => $('#file-input').click());
    $('#import-button').addEventListener('click', () => $('#file-input').click());
    $('#file-input').addEventListener('change', (event) => importFiles(event.target.files));
    $('#library-collapse').addEventListener('click', () => {
      state.libraryCollapsed = true;
      $('#workspace').classList.add('library-collapsed');
      showToast('Library collapsed. Click its icon to expand.');
    });
    $('#library-title').addEventListener('click', () => {
      if (state.libraryCollapsed) {
        state.libraryCollapsed = false;
        $('#workspace').classList.remove('library-collapsed');
      } else { $('#library-scroll').scrollTo({ top: 0, behavior: 'smooth' }); }
    });
    document.querySelectorAll('.filter-chip').forEach((chip) => chip.addEventListener('click', () => {
      state.filter = state.filter === chip.dataset.filter ? null : chip.dataset.filter;
      renderLibrary();
    }));
    $('#library-search-toggle').addEventListener('click', () => {
      const group = $('#library-search-group');
      group.classList.toggle('open');
      if (group.classList.contains('open')) $('#library-search-input').focus();
      else { $('#library-search-input').value = ''; state.libraryQuery = ''; renderLibrary(); }
    });
    $('#library-search-input').addEventListener('input', (event) => { state.libraryQuery = event.target.value; renderLibrary(); });
    $('#library-sort').addEventListener('click', () => {
      state.librarySort = (state.librarySort + 1) % 3;
      $('#library-sort-label').textContent = ['Recents', 'A–Z', 'By type'][state.librarySort];
      renderLibrary();
    });
    $('#library-list').addEventListener('click', (event) => {
      const item = event.target.closest('[data-playlist]');
      if (item) navigate(item.dataset.playlist);
    });

    $('#hero-play').addEventListener('click', () => {
      const songs = playlistTracks();
      if (!songs.length) { showToast('There are no songs in this playlist yet.'); return; }
      if (songs.some((track) => track.id === state.trackId)) togglePlayback();
      else playTrack(songs[0].id);
    });
    $('#save-playlist').addEventListener('click', () => {
      const id = state.playlistId;
      if (state.saved.has(id)) { state.saved.delete(id); showToast('Removed from Your Library'); }
      else { state.saved.add(id); showToast('Saved to Your Library'); }
      renderHero(); renderLibrary();
    });
    $('#download-playlist').addEventListener('click', exportTracklist);
    $('#playlist-more').addEventListener('click', () => {
      const menu = $('#playlist-menu');
      menu.hidden = !menu.hidden;
      $('#playlist-more').setAttribute('aria-expanded', String(!menu.hidden));
    });
    $('#playlist-menu').addEventListener('click', (event) => {
      const action = event.target.closest('[data-menu-action]')?.dataset.menuAction;
      if (!action) return;
      $('#playlist-menu').hidden = true;
      $('#playlist-more').setAttribute('aria-expanded', 'false');
      if (action === 'shuffle') { state.shuffle = true; const songs = playlistTracks(); if (songs.length) playTrack(songs[Math.floor(Math.random() * songs.length)].id); }
      if (action === 'copy') copyPlaylistLink();
      if (action === 'export') exportTracklist();
    });
    $('#playlist-search-toggle').addEventListener('click', () => {
      const input = $('#playlist-search-input');
      input.classList.toggle('open');
      if (input.classList.contains('open')) input.focus();
      else { input.value = ''; state.playlistQuery = ''; renderTracks(); }
    });
    $('#playlist-search-input').addEventListener('input', (event) => { state.playlistQuery = event.target.value; renderTracks(); });
    $('#view-toggle').addEventListener('click', () => {
      state.compact = !state.compact;
      $('#view-toggle-label').textContent = state.compact ? 'Compact' : 'List';
      renderTracks();
    });
    $('#track-list').addEventListener('click', (event) => {
      const like = event.target.closest('[data-like]');
      if (like) { event.stopPropagation(); toggleLike(like.dataset.like); return; }
      const row = event.target.closest('[data-track]');
      if (row) { if (row.dataset.track === state.trackId) togglePlayback(); else playTrack(row.dataset.track); }
    });
    $('#track-list').addEventListener('keydown', (event) => {
      if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.track-row')) { event.preventDefault(); event.target.click(); }
    });

    $('#now-content').addEventListener('click', (event) => {
      const like = event.target.closest('[data-now-like]');
      if (like) { toggleLike(like.dataset.nowLike); return; }
      if (event.target.closest('[data-lyrics-toggle]')) { state.lyricsExpanded = !state.lyricsExpanded; renderNow(); return; }
      const upNext = event.target.closest('[data-up-next]');
      if (upNext) { playTrack(upNext.dataset.upNext); return; }
      if (event.target.closest('[data-open-queue]')) toggleQueue(true);
    });
    $('#close-now').addEventListener('click', () => setRightOpen(false));
    $('#now-more').addEventListener('click', () => showToast(`${currentTrack().title} · ${currentTrack().artist}`));
    $('#toggle-now').addEventListener('click', () => setRightOpen(!state.rightOpen));
    $('#play-button').addEventListener('click', togglePlayback);
    $('#previous-button').addEventListener('click', previousTrack);
    $('#next-button').addEventListener('click', () => nextTrack(true));
    $('#shuffle-button').addEventListener('click', () => { state.shuffle = !state.shuffle; renderControls(); showToast(state.shuffle ? 'Shuffle on' : 'Shuffle off'); });
    $('#repeat-button').addEventListener('click', () => { state.repeat = (state.repeat + 1) % 3; renderControls(); showToast(['Repeat off', 'Repeat all', 'Repeat one'][state.repeat]); });
    $('#progress-slider').addEventListener('input', (event) => {
      const duration = currentTrack().seconds;
      if (!duration) return;
      state.elapsed = duration * Number(event.target.value) / 100;
      if (currentTrack().local && Number.isFinite(audio.duration)) audio.currentTime = Math.min(state.elapsed, audio.duration);
      else if (Number.isFinite(audio.duration) && audio.duration > 0) audio.currentTime = state.elapsed % audio.duration;
      updateProgress();
    });
    $('#volume-slider').addEventListener('input', (event) => {
      state.volume = Number(event.target.value);
      state.muted = state.volume === 0;
      audio.volume = state.volume / 100;
      audio.muted = state.muted;
      renderControls();
    });
    $('#mute-button').addEventListener('click', () => { state.muted = !state.muted; audio.muted = state.muted; renderControls(); });
    $('#queue-button').addEventListener('click', () => toggleQueue($('#queue-overlay').hidden));
    $('#close-queue').addEventListener('click', () => toggleQueue(false));
    $('#queue-overlay').addEventListener('click', (event) => { if (event.target.id === 'queue-overlay') toggleQueue(false); });
    $('#queue-content').addEventListener('click', (event) => {
      const trackButton = event.target.closest('[data-queue-track]');
      if (trackButton) { playTrack(trackButton.dataset.queueTrack); toggleQueue(false); }
    });
    $('#device-button').addEventListener('click', () => showToast('Playing on this device'));
    $('#fullscreen-button').addEventListener('click', async () => {
      try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
      catch (_) { showToast('Full screen is unavailable in this browser.'); }
    });
    document.addEventListener('click', (event) => {
      if (!$('#search-container').contains(event.target) && !event.target.closest('#premium-button')) hideSearch();
      if (!$('#theme-control').contains(event.target)) showThemeMenu(false);
      if (!event.target.closest('.menu-anchor')) { $('#playlist-menu').hidden = true; $('#playlist-more').setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (!$('#theme-menu').hidden) { showThemeMenu(false); $('#theme-button').focus({ preventScroll: true }); }
        hideSearch(); toggleQueue(false); $('#playlist-menu').hidden = true;
      }
      if ((event.key === ' ' || event.code === 'Space') && !['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement?.tagName) && !document.activeElement?.classList.contains('track-row')) {
        event.preventDefault(); togglePlayback();
      }
    });
    audio.addEventListener('loadedmetadata', () => {
      const track = currentTrack();
      if (track.local && audioSrcId === track.id && Number.isFinite(audio.duration)) {
        track.seconds = audio.duration;
        renderHero(); renderTracks(); renderFooter();
      }
    });
    audio.addEventListener('ended', () => { if (currentTrack().local && state.playing) nextTrack(false); });
    window.addEventListener('hashchange', () => {
      const id = decodeURIComponent(location.hash.match(/^#playlist=(.*)$/)?.[1] || '');
      if (catalog[id] && id !== state.playlistId) navigate(id);
    });
    window.addEventListener('beforeunload', () => tracks.filter((track) => track.local).forEach((track) => URL.revokeObjectURL(track.preview)));
  }

  function init() {
    hydrateStaticIcons();
    applyTheme(state.themeChoice, false);
    attachEvents();
    $('#workspace').classList.toggle('show-right', state.rightOpen);
    window.matchMedia('(max-width: 990px)').addEventListener('change', (event) => setRightOpen(!event.matches));
    const deepLink = decodeURIComponent(location.hash.match(/^#playlist=(.*)$/)?.[1] || '');
    if (catalog[deepLink]) { state.playlistId = deepLink; state.history = [deepLink]; }
    renderAll();
    window.setInterval(() => {
      if (!state.playing) return;
      const track = currentTrack();
      if (track.local) {
        state.elapsed = audio.currentTime || state.elapsed;
      } else {
        state.elapsed += .25;
        if (state.elapsed >= track.seconds) {
          if (state.repeat === 2) { state.elapsed = 0; try { audio.currentTime = 0; } catch (_) { /* no-op */ } }
          else { nextTrack(false); return; }
        }
      }
      updateProgress();
    }, 250);
  }
  init();
})();
