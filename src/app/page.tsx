export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10">
      <form className="w-full max-w-3/4 space-y-6">
        <div>
          <label htmlFor="saved-labels" className="block text-lg font-semibold mb-2">
            Sparade etiketter
          </label>
          <select
            id="saved-labels"
            name="saved-labels"
            className="w-full border border-gray-300 rounded-lg p-2"
            defaultValue=""
          >
            <option value="" disabled>Välj en etikett</option>
            <option value="pizzabotten-bas">Pizzabotten - Basnivå</option>
            <option value="pizzabotten-mellan">Pizzabotten - Mellannivå</option>
            <option value="lasagne-bas">Lasagne Mixum - Basnivå</option>
            <option value="lasagne-mellan">Lasagne Mixum - Mellannivå</option>
            <option value="lasagne-hög">Lasagne Mixum - Högnivå</option>
            <option value="pizzabotten-forening">Pizzabotten - Basnivå (Föreningspizzan)</option>
            <option value="tunnbrod-bas">Tunnbröd - Basnivå</option>
            <option value="tunnbrod-mellan">Tunnbröd - Mellannivå</option>
          </select>
        </div>

        <div>
          <label htmlFor="subheading" className="block text-lg font-semibold mb-2">
            Underrubrik
          </label>
          <input
            type="text"
            id="subheading"
            name="subheading"
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Ange underrubrik..."
          />
        </div>
      </form>
    </div>
  );
}
