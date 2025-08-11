import { Button } from '@/components/ui/button';
import Form from 'next/form'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10">
      <Form action="/print-label"
      className="w-full max-w-3/4 space-y-6"> 
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

        <div>
          <label htmlFor="ammount" className="block text-lg font-semibold mb-2">
            Antal (st)
          </label>
          <input
            type="number"
            id="ammount"
            name="ammount"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label htmlFor="weight" className="block text-lg font-semibold mb-2">
            Vikt (gram)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>
        

        <div>
          <input
            type="checkbox"
            id="Checkweight1"
            name="Checkweight"

            className="w-full border border-gray-300 rounded-lg p-2"
            checked
          />
          <label htmlFor="Checkweight" className="block text-lg  mb-2">
            Visa Vikt på etiketten
          </label>
        </div>

        <Button variant="outline">Visa Etikett</Button>

      </Form>
    </div>
  );
}
