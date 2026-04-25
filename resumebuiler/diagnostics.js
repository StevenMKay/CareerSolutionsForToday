export function runDiagnostics() {
  const getState = window.ResumeBuilderDebug && window.ResumeBuilderDebug.getState;
  console.log('STATE:', typeof getState === 'function' ? getState() : null);
}
