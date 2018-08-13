const urlRoot = "http://www.nhm.ac.uk/resources/nature-online/online-exhibitions/endeavour-botanical/pictures/A/B";
const urlSuffix = "A.jpg";
const dataObject = {
  '000800': {
    id: "000800",
    species: "Bruguiera Gymnorrhiz",
    family: "Rhizophoracea",
    authority: "Lamarck, Encycl. 4(2): 696, t. 397 (1798).",
    country: "Australia",
    place: "Bay Of Inlets",
    artist: "Frederick Polydore Nodder",
    format: "Finished Drawing",
    medium: "Watercolours On Paper",
    dimensions: "540 x 365/460 mm",
    collection: "A.0003./.0119./.0002",
    specimen: "Bay of Inlets",
    notesRecto: "[ink] 'Fred.k Polydore Nodder, Pinxt 1777'; [pencil] 'Rhizophora Gynorhiza' [unknown]",
    notesVerso: "'Bustard Bay' [JB]",
    citation: "Bacstrom, S. Ms. : 80",
  },
  '000617': {
    id: "000617",
    species: "Mucuna Gigantea",
    family: "Leguminosae",
    authority: "(Willdenow) de Candolle, Prodr. 2: 405 (1825).",
    country: "Australia",
    place: "Endeavour River",
    artist: "Gerald Sibelius",
    format: "Coloured Engraving",
    medium: "Ink And Watercolours On Paper",
    dimensions: "",
    collection: "A.0002./.0087./.0005",
    specimen: "2 sheets, Endeavour River",
    notesRecto: "",
    notesVerso: "",
    citation: "col. engraving 1981 BF: pl. 76",
  },
  '001027': {
    id: "001027",
    species: "Passiflora Aurantia",
    family: "Passifloraceae",
    authority: "(Jacquin) Raven, Kew Bull. 15: 476 (1962).",
    country: "Australia",
    place: "Bay Of Inlets, Endeavour River",
    artist: "Daniel Mackenzie",
    format: "Coloured Engraving",
    medium: "Ink And Watercolours On Paper",
    dimensions: "",
    collection: "A.0003./.0153./.0005",
    specimen: "2 sheets, Bay of Inlets, Endeavour River",
    notesRecto: "",
    notesVerso: "",
    citation: "col. engraving 1982 BF: pl. 134.",
  },
  '002373': {
    id: "002373",
    species: "Ficus Racemosa",
    family: "Ulmaceae",
    authority: "",
    country: "Australia",
    place: "Endeavour River",
    artist: "Frederick Polydore Nodder",
    format: "Finished Drawing",
    medium: "Watercolours On Paper",
    dimensions: "545 x 350/375 mm",
    collection: "A.0007./.0361.a/.0002",
    specimen: "Endeavour River.",
    notesRecto: "[ink] 'Fred.k Polydore Nodder, Pinx.t 1782'.",
    notesVerso: "",
    citation: "See Beaglehole, J. C. 1962 2: pl.vi col. pl. Bacstrom, S. Ms.: 140.",
  },
  '001743': {
    id: "001743",
    species: "Ipomoea Indica",
    family: "Convolvulaceae",
    authority: "[Burman f.] Merrill, Tnterpr. Herb. amboin.: 445 [1917].",
    country: "Australia",
    place: "Endeavour River",
    artist: "John Lee",
    format: "Coloured Engraving",
    medium: "Ink And Watercolours On Paper",
    dimensions: "457 x 295/430 mm",
    collection: "A.0006./.0254./.0005",
    specimen: "Endeavour River",
    notesRecto: "[pencil] 'Convolvulus multiflorus' [unknown]",
    notesVerso: "",
    citation: "1982 B.F.: pl. 223.",
  },
  '002394': {
    id: "002394",
    species: "Dendrobium Canaliculatum",
    family: "Orchidaceae",
    authority: "R. Brown, Prodr.: 333 [1810].",
    country: "Australia",
    place: "",
    artist: "Frederick Polydore Nodder",
    format: "Finished Drawing",
    medium: "Watercolours On Paper",
    dimensions: "540 x 360/395 mm",
    collection: "A.0008./.0367./.0002",
    specimen: "* [holotype].",
    notesRecto: "[ink] 'Fred.k Polydore Nodder pinx.t 1780'; [pencil] 'All the Petals are blunt' [unknown]",
    notesVerso: "",
    citation: "",
  },
  '0008001': {
    id: "000800",
    species: "Bruguiera Gymnorrhiz",
    family: "Rhizophoracea",
    authority: "Lamarck, Encycl. 4(2): 696, t. 397 (1798).",
    country: "Australia",
    place: "Bay Of Inlets",
    artist: "Frederick Polydore Nodder",
    format: "Finished Drawing",
    medium: "Watercolours On Paper",
    dimensions: "540 x 365/460 mm",
    collection: "A.0003./.0119./.0002",
    specimen: "Bay of Inlets",
    notesRecto: "[ink] 'Fred.k Polydore Nodder, Pinxt 1777'; [pencil] 'Rhizophora Gynorhiza' [unknown]",
    notesVerso: "'Bustard Bay' [JB]",
    citation: "Bacstrom, S. Ms. : 80",
  },
  '0006171': {
    id: "000617",
    species: "Mucuna Gigantea",
    family: "Leguminosae",
    authority: "(Willdenow) de Candolle, Prodr. 2: 405 (1825).",
    country: "Australia",
    place: "Endeavour River",
    artist: "Gerald Sibelius",
    format: "Coloured Engraving",
    medium: "Ink And Watercolours On Paper",
    dimensions: "",
    collection: "A.0002./.0087./.0005",
    specimen: "2 sheets, Endeavour River",
    notesRecto: "",
    notesVerso: "",
    citation: "col. engraving 1981 BF: pl. 76",
  },
  '0010271': {
    id: "001027",
    species: "Passiflora Aurantia",
    family: "Passifloraceae",
    authority: "(Jacquin) Raven, Kew Bull. 15: 476 (1962).",
    country: "Australia",
    place: "Bay Of Inlets, Endeavour River",
    artist: "Daniel Mackenzie",
    format: "Coloured Engraving",
    medium: "Ink And Watercolours On Paper",
    dimensions: "",
    collection: "A.0003./.0153./.0005",
    specimen: "2 sheets, Bay of Inlets, Endeavour River",
    notesRecto: "",
    notesVerso: "",
    citation: "col. engraving 1982 BF: pl. 134.",
  },
  '0023731': {
    id: "002373",
    species: "Ficus Racemosa",
    family: "Ulmaceae",
    authority: "",
    country: "Australia",
    place: "Endeavour River",
    artist: "Frederick Polydore Nodder",
    format: "Finished Drawing",
    medium: "Watercolours On Paper",
    dimensions: "545 x 350/375 mm",
    collection: "A.0007./.0361.a/.0002",
    specimen: "Endeavour River.",
    notesRecto: "[ink] 'Fred.k Polydore Nodder, Pinx.t 1782'.",
    notesVerso: "",
    citation: "See Beaglehole, J. C. 1962 2: pl.vi col. pl. Bacstrom, S. Ms.: 140.",
  },
  '0017431': {
    id: "001743",
    species: "Ipomoea Indica",
    family: "Convolvulaceae",
    authority: "[Burman f.] Merrill, Tnterpr. Herb. amboin.: 445 [1917].",
    country: "Australia",
    place: "Endeavour River",
    artist: "John Lee",
    format: "Coloured Engraving",
    medium: "Ink And Watercolours On Paper",
    dimensions: "457 x 295/430 mm",
    collection: "A.0006./.0254./.0005",
    specimen: "Endeavour River",
    notesRecto: "[pencil] 'Convolvulus multiflorus' [unknown]",
    notesVerso: "",
    citation: "1982 B.F.: pl. 223.",
  },
  '0023941': {
    id: "002394",
    species: "Dendrobium Canaliculatum",
    family: "Orchidaceae",
    authority: "R. Brown, Prodr.: 333 [1810].",
    country: "Australia",
    place: "",
    artist: "Frederick Polydore Nodder",
    format: "Finished Drawing",
    medium: "Watercolours On Paper",
    dimensions: "540 x 360/395 mm",
    collection: "A.0008./.0367./.0002",
    specimen: "* [holotype].",
    notesRecto: "[ink] 'Fred.k Polydore Nodder pinx.t 1780'; [pencil] 'All the Petals are blunt' [unknown]",
    notesVerso: "",
    citation: "",
  },
};
const dataKeys = Object.keys(dataObject);
