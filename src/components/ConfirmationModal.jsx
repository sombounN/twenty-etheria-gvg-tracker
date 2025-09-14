function ConfirmationModal({ isOpen, message, onConfirm, onCancel }) {
  if (!isOpen) return null;
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: 20,
          borderRadius: 8,
          maxWidth: 300,
          width: '100%'
        }}
      >
        <p style={{marginBottom: 20}}>{message}</p>
        <div style={{display: 'flex', justifyContent: 'flex-end', gap: 8}}>
          <button className="btn" onClick={onConfirm}>Confirm</button>
          <button className="btn secondary" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
