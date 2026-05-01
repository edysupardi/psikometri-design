/**
 * utils.js — Psikometri Shared Utilities
 *
 * Provides vanilla JS utilities for interactive components:
 *   - Modal (open / close / backdrop click)
 *   - Tabs (switch panels)
 *   - Stepper (multi-step wizard)
 *   - Accordion (expand / collapse)
 *   - Toggle switch (on / off visual)
 *   - OTP input (auto-focus next box)
 *   - Number stepper (+/−)
 *   - Filter tabs (pill-style)
 *   - Radio cards (selection)
 *   - Checkbox grid (WWQ scale)
 *
 * Auto-initializes on DOMContentLoaded.
 * Also exports each function to window for manual use.
 */

// ─── Modal ────────────────────────────────────────────────────────────────────

function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('hidden');
  requestAnimationFrame(() => el.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  setTimeout(() => {
    el.classList.add('hidden');
    document.body.style.overflow = '';
  }, 200);
}

function initModals() {
  // Close on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) closeModal(backdrop.id);
    });
  });

  // Close buttons with data-close-modal
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.closest('.modal-backdrop')?.id;
      if (id) closeModal(id);
    });
  });

  // Open buttons with data-open-modal="<id>"
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.openModal));
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(el => closeModal(el.id));
    }
  });
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

function switchTab(groupEl, tabId) {
  if (typeof groupEl === 'string') groupEl = document.querySelector(groupEl);
  if (!groupEl) return;

  groupEl.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  const container = groupEl.closest('[data-tab-group]') || groupEl.parentElement;
  const panels = container.querySelectorAll('.tab-panel');
  panels.forEach(panel => {
    panel.classList.toggle('active', panel.dataset.tabPanel === tabId);
  });
}

function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabBar => {
    tabBar.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => switchTab(tabBar, btn.dataset.tab));
    });
  });
}

// ─── Stepper (multi-step wizard) ──────────────────────────────────────────────

function getStepperState(stepperId) {
  const stepper = document.getElementById(stepperId);
  if (!stepper) return null;
  const steps = stepper.querySelectorAll('.step');
  const current = [...steps].findIndex(s => s.classList.contains('active'));
  return { stepper, steps, current };
}

function goToStep(stepperId, index) {
  const { stepper, steps } = getStepperState(stepperId) || {};
  if (!steps) return;

  steps.forEach((step, i) => {
    step.classList.remove('active', 'done');
    if (i < index) step.classList.add('done');
    else if (i === index) step.classList.add('active');
  });

  // Show/hide step panels
  const container = stepper.closest('[data-stepper-group]') || stepper.parentElement;
  container.querySelectorAll('[data-step-panel]').forEach(panel => {
    panel.style.display = panel.dataset.stepPanel == index ? '' : 'none';
  });
}

function nextStep(stepperId) {
  const state = getStepperState(stepperId);
  if (!state) return;
  const next = Math.min(state.current + 1, state.steps.length - 1);
  goToStep(stepperId, next);
}

function prevStep(stepperId) {
  const state = getStepperState(stepperId);
  if (!state) return;
  const prev = Math.max(state.current - 1, 0);
  goToStep(stepperId, prev);
}

function initSteppers() {
  document.querySelectorAll('.stepper').forEach(stepper => {
    if (!stepper.id) return;
    // Ensure first step is active
    const firstActive = stepper.querySelector('.step.active');
    if (!firstActive) goToStep(stepper.id, 0);
  });

  document.querySelectorAll('[data-next-step]').forEach(btn => {
    btn.addEventListener('click', () => nextStep(btn.dataset.nextStep));
  });

  document.querySelectorAll('[data-prev-step]').forEach(btn => {
    btn.addEventListener('click', () => prevStep(btn.dataset.prevStep));
  });
}

// ─── Accordion ────────────────────────────────────────────────────────────────

function toggleAccordion(el) {
  if (typeof el === 'string') el = document.getElementById(el);
  if (!el) return;
  el.classList.toggle('open');
}

function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      toggleAccordion(header.closest('.accordion'));
    });
  });
}

// ─── Toggle switch ────────────────────────────────────────────────────────────

function setToggle(el, value) {
  el.classList.toggle('on', value);
  const label = el.closest('.toggle-row, .toggle-wrap')?.querySelector('.toggle-state-label');
  if (label) label.textContent = value ? 'Aktif' : 'Nonaktif';
}

function initToggles() {
  document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const next = !toggle.classList.contains('on');
      setToggle(toggle, next);

      // Show/hide dependent fields
      const targetId = toggle.dataset.toggleTarget;
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) target.style.display = next ? '' : 'none';
      }
    });
  });
}

// ─── OTP input ────────────────────────────────────────────────────────────────

function initOtpInput() {
  document.querySelectorAll('.otp-group').forEach(group => {
    const inputs = group.querySelectorAll('.otp-input');

    inputs.forEach((input, i) => {
      input.addEventListener('input', e => {
        const val = e.target.value.replace(/\D/g, '');
        e.target.value = val.slice(-1);
        if (val && i < inputs.length - 1) inputs[i + 1].focus();
        if (val) input.classList.add('filled');
        else input.classList.remove('filled');
      });

      input.addEventListener('keydown', e => {
        if (e.key === 'Backspace' && !input.value && i > 0) inputs[i - 1].focus();
        if (e.key === 'ArrowLeft' && i > 0) inputs[i - 1].focus();
        if (e.key === 'ArrowRight' && i < inputs.length - 1) inputs[i + 1].focus();
      });

      input.addEventListener('paste', e => {
        e.preventDefault();
        const pasted = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '');
        pasted.split('').forEach((ch, j) => {
          if (inputs[i + j]) {
            inputs[i + j].value = ch;
            inputs[i + j].classList.add('filled');
          }
        });
        const next = Math.min(i + pasted.length, inputs.length - 1);
        inputs[next].focus();
      });
    });
  });
}

// ─── Number stepper ───────────────────────────────────────────────────────────

function initNumberSteppers() {
  document.querySelectorAll('.num-stepper').forEach(stepper => {
    const valEl = stepper.querySelector('.num-stepper-val');
    const minusBtn = stepper.querySelector('[data-step="-1"]');
    const plusBtn  = stepper.querySelector('[data-step="1"]');
    if (!valEl) return;

    const min = parseInt(stepper.dataset.min ?? 0);
    const max = parseInt(stepper.dataset.max ?? 9999);

    function update(delta) {
      const current = parseInt(valEl.value || valEl.textContent || 0);
      const next = Math.min(Math.max(current + delta, min), max);
      if (valEl.tagName === 'INPUT') valEl.value = next;
      else valEl.textContent = next;
    }

    minusBtn?.addEventListener('click', () => update(-1));
    plusBtn?.addEventListener('click',  () => update(1));
  });
}

// ─── Filter tabs (pill style) ─────────────────────────────────────────────────

function initFilterTabs() {
  document.querySelectorAll('.filter-tabs').forEach(group => {
    group.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        group.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Filter target (optional)
        const filterGroup = tab.dataset.filterGroup;
        const filterVal   = tab.dataset.filterValue;
        if (filterGroup && filterVal) {
          document.querySelectorAll(`[data-filter-group="${filterGroup}"]`).forEach(item => {
            const match = filterVal === 'all' || item.dataset.filterCat === filterVal;
            item.style.display = match ? '' : 'none';
          });
        }
      });
    });
  });
}

// ─── Radio cards ──────────────────────────────────────────────────────────────

function initRadioCards() {
  document.querySelectorAll('.radio-card').forEach(card => {
    card.addEventListener('click', () => {
      const radio = card.querySelector('input[type="radio"]');
      if (!radio) return;
      radio.checked = true;
      const name = radio.name;
      document.querySelectorAll(`.radio-card input[name="${name}"]`).forEach(r => {
        r.closest('.radio-card').classList.toggle('selected', r === radio);
      });
    });
  });
}

// ─── Checkbox grid (WWQ) ──────────────────────────────────────────────────────

function initCheckboxGrid() {
  document.querySelectorAll('.checkbox-grid-item').forEach(item => {
    item.addEventListener('click', () => {
      const cb = item.querySelector('input[type="checkbox"]');
      if (!cb) return;
      cb.checked = !cb.checked;
      item.classList.toggle('checked', cb.checked);
    });
  });
}

// ─── Character counter ────────────────────────────────────────────────────────

function initCharCounters() {
  document.querySelectorAll('[data-counter-target]').forEach(counter => {
    const targetId = counter.dataset.counterTarget;
    const max = parseInt(counter.dataset.counterMax || 0);
    const target = document.getElementById(targetId);
    if (!target) return;

    function update() {
      const len = target.value.length;
      counter.textContent = max ? `${len}/${max} karakter` : `${len} karakter`;
      counter.style.color = (max && len > max) ? 'var(--error)' : '';
    }

    target.addEventListener('input', update);
    update();
  });
}

// ─── Factor buttons (PAPIKOSTICK A/B) ────────────────────────────────────────

function initFactorBtns() {
  document.querySelectorAll('.factor-btns').forEach(group => {
    group.querySelectorAll('.factor-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.factor-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });
}

// ─── Auto-initialize on DOM ready ────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initModals();
  initTabs();
  initSteppers();
  initAccordions();
  initToggles();
  initOtpInput();
  initNumberSteppers();
  initFilterTabs();
  initRadioCards();
  initCheckboxGrid();
  initCharCounters();
  initFactorBtns();
});

// ─── Exports to window ────────────────────────────────────────────────────────

Object.assign(window, {
  openModal, closeModal,
  switchTab,
  nextStep, prevStep, goToStep,
  toggleAccordion,
  setToggle,
  initShell: window.initShell, // from shell.js
});
