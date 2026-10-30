(() => {
  const out = document.querySelector('#out');
  const tests = [];
  const test = (name, fn) => {
    try { fn(); tests.push(`PASS ${name}`); }
    catch (error) { tests.push(`FAIL ${name}: ${error.message}`); }
  };
  test('負在庫修復', () => {
    const state = QualityGate.normalize({...RAMEN_CONFIG.DEFAULT, inventory:{...RAMEN_CONFIG.DEFAULT.inventory, noodle:-2}}, RAMEN_CONFIG.DEFAULT);
    if (state.inventory.noodle !== 0) throw new Error('not repaired');
  });
  test('旧stats深層補完', () => {
    const state = QualityGate.normalize({...RAMEN_CONFIG.DEFAULT, stats:{manual:3}}, RAMEN_CONFIG.DEFAULT);
    if (!state.stats.firstSeen?.recipes || !state.stats.offline) throw new Error('nested stats missing');
  });
  test('不正ID除去', () => {
    const state = QualityGate.normalize({...RAMEN_CONFIG.DEFAULT, research:['invalid'], ach:['invalid'], supplier:'invalid'}, RAMEN_CONFIG.DEFAULT);
    if (state.research.length || state.ach.length || state.supplier !== RAMEN_CONFIG.DEFAULT.supplier) throw new Error('invalid ID remains');
  });
  out.textContent = tests.join('\n');
})();
