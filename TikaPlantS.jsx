import React, { useState, useRef } from 'react';
import { 
  Plus, 
  Leaf, 
  Calendar, 
  MapPin, 
  ClipboardList, 
  TrendingUp, 
  Download, 
  Trash2,
  Database,
  Edit2,
  Camera,
  Image as ImageIcon,
  X,
  Skull
} from 'lucide-react';

const App = () => {
  // State Utama - Daftar lengkap 18 tanaman
  const [plants, setPlants] = useState([
    { id: 'STE-001', nama: 'Snapdragon Tetra', varietas: 'Floral', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'DPE-001', nama: 'Dwarf Petunia', varietas: 'Miniature', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'ACR-001', nama: 'Aster Crego', varietas: 'Perennial', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'KAN-001', nama: 'Kangkung', varietas: 'Darat', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'THI-001', nama: 'Terong Hijau', varietas: 'Lalap', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'TUN-001', nama: 'Terong Ungu', varietas: 'Panjang', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'CAB-001', nama: 'Cabai', varietas: 'Rawit', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'STR-001', nama: 'Stroberi', varietas: 'Manis', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'BAY-001', nama: 'Bayam', varietas: 'Cabut', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'CIP-001', nama: 'Ciplukan', varietas: 'Liar', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'LBU-001', nama: 'Lidah Buaya', varietas: 'Aloe Vera', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'ANG-001', nama: 'Anggrek', varietas: 'Pot 1', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'ANG-002', nama: 'Anggrek', varietas: 'Pot 2', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'ANG-003', nama: 'Anggrek', varietas: 'Pot 3', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'LME-001', nama: 'Lidah Mertua', varietas: 'Pot 1', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'LME-002', nama: 'Lidah Mertua', varietas: 'Pot 2', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'LME-003', nama: 'Lidah Mertua', varietas: 'Pot 3', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' },
    { id: 'SER-001', nama: 'Sereh', varietas: 'Dapur', media: 'Tanah', tanggal: '2026-03-28', lokasi: 'Halaman Depan', status: 'Hidup', foto: '' }
  ]);

  // State Log Harian - Data Awal Semai
  const [logs, setLogs] = useState([
    { id: 1711785600001, plantId: 'STE-001', tanggal: '2026-03-30', tinggi: 0, daun: 0, fase: 'Semai', kondisi: 'Hijau', foto: '' },
    { id: 1711785600002, plantId: 'DPE-001', tanggal: '2026-03-30', tinggi: 0, daun: 0, fase: 'Semai', kondisi: 'Hijau', foto: '' },
    { id: 1711785600003, plantId: 'ACR-001', tanggal: '2026-03-30', tinggi: 0, daun: 0, fase: 'Semai', kondisi: 'Hijau', foto: '' },
    { id: 1711785600004, plantId: 'KAN-001', tanggal: '2026-03-30', tinggi: 0, daun: 0, fase: 'Semai', kondisi: 'Hijau', foto: '' },
    { id: 1711785600005, plantId: 'THI-001', tanggal: '2026-03-30', tinggi: 0, daun: 0, fase: 'Semai', kondisi: 'Hijau', foto: '' },
    { id: 1711785600006, plantId: 'TUN-001', tanggal: '2026-03-30', tinggi: 0, daun: 0, fase: 'Semai', kondisi: 'Hijau', foto: '' },
    { id: 1711785600007, plantId: 'CAB-001', tanggal: '2026-03-30', tinggi: 0, daun: 0, fase: 'Semai', kondisi: 'Hijau', foto: '' },
    { id: 1711785600008, plantId: 'STR-001', tanggal: '2026-03-30', tinggi: 0, daun: 0, fase: 'Semai', kondisi: 'Hijau', foto: '' }
  ]);

  // State UI
  const [activeTab, setActiveTab] = useState('master');
  const [showPlantModal, setShowPlantModal] = useState(false);
  const [showLogModal, setShowLogModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [tempImage, setTempImage] = useState(''); 
  
  const fileInputRef = useRef(null);

  // Helper: Menghitung umur
  const calculateAge = (dateString) => {
    const start = new Date(dateString);
    const now = new Date();
    start.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    return Math.max(0, Math.floor((now - start) / (1000 * 60 * 60 * 24)));
  };

  const activeCount = plants.filter(p => p.status === 'Hidup').length;

  const generatePlantId = (name) => {
    const words = name.trim().replace(/[^a-zA-Z\s]/g, '').split(/\s+/).filter(w => w.length > 0);
    let prefix = words.length >= 3 ? words[0][0] + words[1][0] + words[2][0] : words.length === 2 ? words[0][0] + words[1].substring(0, 2) : words[0].substring(0, 3);
    const finalPrefix = prefix.toUpperCase().padEnd(3, 'X');
    const count = plants.filter(p => p.id.startsWith(finalPrefix)).length;
    return `${finalPrefix}-${(count + 1).toString().padStart(3, '0')}`;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setTempImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSavePlant = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nama = formData.get('nama');
    const foto = tempImage || (editingItem ? editingItem.foto : '');
    
    if (editingItem) {
      setPlants(plants.map(p => p.id === editingItem.id ? { ...p, nama, varietas: formData.get('varietas'), media: formData.get('media'), tanggal: formData.get('tanggal'), status: formData.get('status') || p.status, foto } : p));
    } else {
      setPlants([...plants, { id: generatePlantId(nama), nama, varietas: formData.get('varietas'), media: formData.get('media'), tanggal: formData.get('tanggal'), lokasi: 'Halaman Depan', status: 'Hidup', foto }]);
    }
    closeModals();
  };

  const handleSaveLog = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const plantId = formData.get('plantId');
    const kondisi = formData.get('kondisi');
    const foto = tempImage || (editingItem ? editingItem.foto : '');
    
    if (editingItem) {
      setLogs(logs.map(l => l.id === editingItem.id ? { ...l, plantId, tanggal: formData.get('tanggal'), tinggi: Number(formData.get('tinggi')), daun: Number(formData.get('daun')), fase: formData.get('fase'), kondisi, foto } : l));
    } else {
      setLogs([{ id: Date.now(), plantId, tanggal: formData.get('tanggal'), tinggi: Number(formData.get('tinggi')), daun: Number(formData.get('daun')), fase: formData.get('fase'), kondisi, foto }, ...logs]);
    }

    setPlants(plants.map(p => p.id === plantId ? { ...p, status: kondisi === 'Mati' ? 'Mati' : 'Hidup' } : p));
    closeModals();
  };

  const closeModals = () => { setShowPlantModal(false); setShowLogModal(false); setEditingItem(null); setTempImage(''); };
  const openEditPlant = (p) => { setEditingItem(p); setTempImage(p.foto); setShowPlantModal(true); };
  const openEditLog = (l) => { setEditingItem(l); setTempImage(l.foto); setShowLogModal(true); };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans p-4 md:p-6">
      <input type="file" ref={fileInputRef} accept="image/*" capture="environment" onChange={handleFileChange} className="hidden" />

      {/* Header Ringkas dengan Nama Baru */}
      <header className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
            <Leaf className="w-6 h-6 text-emerald-600" /> TikaPlant's
          </h1>
          <p className="text-sm text-slate-500">Monitoring perkembangan tanaman otomatis.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-2 px-4 rounded-xl shadow-sm border border-slate-100">
           <div className="text-center">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Hidup</div>
              <div className="text-lg font-bold text-emerald-600 leading-none">{activeCount}</div>
           </div>
           <div className="w-px h-6 bg-slate-200" />
           <div className="text-center">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Total</div>
              <div className="text-lg font-bold text-slate-600 leading-none">{plants.length}</div>
           </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Navigasi Tab */}
        <div className="flex gap-6 mb-6 border-b border-slate-200">
          <button onClick={() => setActiveTab('master')} className={`pb-3 text-sm font-semibold relative transition-colors ${activeTab === 'master' ? 'text-emerald-700' : 'text-slate-400'}`}>
            Daftar Tanaman
            {activeTab === 'master' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600" />}
          </button>
          <button onClick={() => setActiveTab('logs')} className={`pb-3 text-sm font-semibold relative transition-colors ${activeTab === 'logs' ? 'text-emerald-700' : 'text-slate-400'}`}>
            Log Perkembangan
            {activeTab === 'logs' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600" />}
          </button>
        </div>

        {/* Action Bar */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            {activeTab === 'master' ? 'Database Utama' : 'Catatan Harian'}
          </h2>
          <button onClick={() => activeTab === 'master' ? setShowPlantModal(true) : setShowLogModal(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all shadow-sm">
            <Plus size={16} /> {activeTab === 'master' ? 'Tambah' : 'Log'}
          </button>
        </div>

        {/* Tabel Data */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                {activeTab === 'master' ? (
                  <tr>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase">ID & Foto</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase">Nama Tanaman</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase text-center">Status</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase text-center">Umur</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase text-center">Aksi</th>
                  </tr>
                ) : (
                  <tr>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase">Tanaman</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase text-center">Ukur</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase text-center">Kondisi</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase text-center">Fase</th>
                    <th className="p-4 text-xs font-bold text-slate-400 uppercase text-center">Aksi</th>
                  </tr>
                )}
              </thead>
              <tbody className="divide-y divide-slate-50">
                {activeTab === 'master' ? plants.map(p => (
                  <tr key={p.id} className={`hover:bg-slate-50/50 transition-colors ${p.status === 'Mati' ? 'bg-slate-50/50 grayscale opacity-60' : ''}`}>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 overflow-hidden border border-slate-200 flex-shrink-0">
                          {p.foto ? <img src={p.foto} className="w-full h-full object-cover" /> : <ImageIcon className="w-full h-full p-2 text-slate-300" />}
                        </div>
                        <span className="font-mono text-sm font-bold text-emerald-800">{p.id}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm font-semibold text-slate-800 leading-tight">{p.nama}</div>
                      <div className="text-[11px] text-slate-400 tracking-wider uppercase font-bold">{p.varietas || '-'}</div>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${p.status === 'Mati' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                        {p.status === 'Mati' ? 'MATI' : 'HIDUP'}
                      </span>
                    </td>
                    <td className="p-4 text-center text-sm font-medium">
                      {calculateAge(p.tanggal)} <span className="text-[10px] text-slate-400">Hari</span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center gap-2">
                        <button onClick={() => openEditPlant(p)} className="p-1.5 text-slate-400 hover:text-emerald-600"><Edit2 size={14}/></button>
                        <button onClick={() => setPlants(plants.filter(x => x.id !== p.id))} className="p-1.5 text-slate-400 hover:text-rose-500"><Trash2 size={14}/></button>
                      </div>
                    </td>
                  </tr>
                )) : logs.map(l => (
                  <tr key={l.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded bg-slate-100 overflow-hidden border border-slate-200">
                          {l.foto ? <img src={l.foto} className="w-full h-full object-cover" /> : <ImageIcon className="w-full h-full p-2 text-slate-300" />}
                        </div>
                        <div>
                           <div className="font-bold text-emerald-800 leading-none">{l.plantId}</div>
                           <div className="text-[10px] text-slate-400 mt-1">{l.tanggal}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                       <div className="text-sm font-bold">{l.tinggi}cm</div>
                       <div className="text-[10px] text-slate-400 leading-none">{l.daun} Daun</div>
                    </td>
                    <td className="p-4 text-center">
                       <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${l.kondisi === 'Mati' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>{l.kondisi}</span>
                    </td>
                    <td className="p-4 text-center">
                       <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100 uppercase tracking-tighter">{l.fase}</span>
                    </td>
                    <td className="p-4 text-center text-slate-400">
                       <div className="flex justify-center gap-2">
                         <button onClick={() => openEditLog(l)}><Edit2 size={14}/></button>
                         <button onClick={() => setLogs(logs.filter(x => x.id !== l.id))}><Trash2 size={14}/></button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal Edit/Tambah */}
      {(showPlantModal || showLogModal) && (
        <div className="fixed inset-0 bg-slate-800/40 backdrop-blur-[2px] flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-800">{editingItem ? 'Edit' : 'Tambah'} {showPlantModal ? 'Tanaman' : 'Catatan'}</h3>
              <button onClick={closeModals} className="text-slate-400 hover:text-slate-600"><X size={20}/></button>
            </div>

            <form onSubmit={showPlantModal ? handleSavePlant : handleSaveLog} className="space-y-4 text-sm">
              {/* Kamera Section */}
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="w-24 h-24 rounded-lg bg-white border border-slate-200 overflow-hidden relative group cursor-pointer" onClick={() => fileInputRef.current.click()}>
                   {tempImage ? <img src={tempImage} className="w-full h-full object-cover" /> : <Camera className="w-full h-full p-6 text-slate-200" />}
                </div>
                <button type="button" onClick={() => fileInputRef.current.click()} className="text-[10px] font-bold text-emerald-700 bg-white px-3 py-1.5 border border-emerald-100 rounded-md shadow-sm uppercase tracking-wider">AMBIL FOTO DARI HP</button>
              </div>

              {showPlantModal ? (
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Nama Tanaman</label>
                    <input name="nama" defaultValue={editingItem?.nama} required className="w-full p-2 border rounded-lg bg-slate-50 outline-none focus:border-emerald-300" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Varietas</label>
                    <input name="varietas" defaultValue={editingItem?.varietas} className="w-full p-2 border rounded-lg bg-slate-50 outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Media</label>
                      <select name="media" defaultValue={editingItem?.media} className="w-full p-2 border rounded-lg bg-slate-50 outline-none">
                        <option>Tanah</option><option>Hidroponik</option><option>Kompos</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Tgl Tanam</label>
                      <input type="date" name="tanggal" defaultValue={editingItem?.tanggal || '2026-03-28'} className="w-full p-2 border rounded-lg bg-slate-50 outline-none" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Tanaman</label>
                    <select name="plantId" defaultValue={editingItem?.plantId} className="w-full p-2 border rounded-lg bg-slate-50 outline-none font-semibold">
                      {plants.map(p => <option key={p.id} value={p.id}>{p.id} - {p.nama}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Tinggi (cm)</label>
                      <input type="number" step="0.1" name="tinggi" defaultValue={editingItem?.tinggi} className="w-full p-2 border rounded-lg bg-slate-50 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Jumlah Daun</label>
                      <input type="number" name="daun" defaultValue={editingItem?.daun} className="w-full p-2 border rounded-lg bg-slate-50 outline-none" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-emerald-600 uppercase">Fase</label>
                      <select name="fase" defaultValue={editingItem?.fase || 'Semai'} className="w-full p-2 border rounded-lg bg-emerald-50/50 outline-none">
                        <option>Semai</option><option>Tumbuh Daun</option><option>Berbunga</option><option>Berbuah</option><option>Siap Panen</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-rose-600 uppercase">Kondisi</label>
                      <select name="kondisi" defaultValue={editingItem?.kondisi || 'Hijau'} className="w-full p-2 border rounded-lg bg-rose-50/50 outline-none">
                        <option value="Hijau">Sehat</option><option value="Kuning">Kuning</option><option>Layu</option><option value="Mati">MATI</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Tanggal Cek</label>
                    <input type="date" name="tanggal" defaultValue={editingItem?.tanggal || new Date().toISOString().split('T')[0]} className="w-full p-2 border rounded-lg bg-slate-50 outline-none" />
                  </div>
                </div>
              )}

              <button type="submit" className="w-full bg-emerald-600 text-white p-3 rounded-lg text-sm font-bold shadow-sm hover:bg-emerald-700 transition-colors mt-4 uppercase tracking-widest">Simpan Perubahan</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;