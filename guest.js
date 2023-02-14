const speakers = [
  {
    images: {
      imagesUrl: './images/speaker4.png',
      imagesAlt: 'Chandler Moore',
    },
    name: 'Professor of Entrepreneurial Legal Studies at Havard',
    shortDescription: '',
    profile: 'Chandler studies commons-based perr production, and published his seminal book The Wealth of Network in 2019.',
  },

  {
    images: {
      imagesUrl: './images/prof_rita.JPG',
      imagesAlt: 'Prof. Dickson Rita',
    },
    name: 'Prof. Dickson Rita',
    shortDescription: 'Provost at Kwame Nkrumah University of Science and technology',
    profile: `Prof. Dickson obtained her M.Pharm (Pharmacognosy) in 1999 and was appointed a lecturer in 2000.
    In 2003, she was awarded a Commonwealth scholarship to pursue her PhD at King's College, University of London, UK.`,
  },

  {
    images: {
      imagesUrl: './images/claudySiar.JPG',
      imagesAlt: 'Claudy Siar',
    },
    name: 'Claudy Siar',
    shortDescription: 'Journalist, Presenter',
    profile: ` In 2014-2015,in the historical television series Brothers the Arms by Rachid Bouchareb and Pascal Blanchard,he presents the biography of Florence Conrad.
    In 2016-2017, he hosted The Voice Afrique francophone on Voxafrica.`,
  },

  {
    images: {
      imagesUrl: './images/Kossi_festival.JPG',
      imagesAlt: 'Kossi stack',
    },
    name: 'Augustin Kossi',
    shortDescription: 'Kossi is a DEV Programmer Eng and big architech in Kumasi',
    profile: 'Kossi has a PhD in ICTM and currently a Senior Lecturer in the Department of Architecture, Kwame Nkrumah University Of Science and Technology. is an active practicing consulting architect and the C.E.O. of the PROJEKT DAVID FOUNDATION.',
  },

  {
    images: {
      imagesUrl: './images/speaker5.png',
      imagesAlt: 'Jocelyne Béroard',
    },
    name: 'Jocelyne Béroard',
    shortDescription: 'Jocelyne is a Martinican singer and songwriter',
    profile: 'In 2014, she sang On noublie pas (written by Serge Bilé) with several artists and personalities including Alpha Blondy, Harry Roselmack and Admiral T. This song is a tribute to the 152 victims from Martinique of the crash of 16 August 2005,',
  },

  {
    images: {
      imagesUrl: './images/speaker1.png',
      imagesAlt: 'Scott Michael Disick',
    },
    name: 'Scott Michael Disick',
    shortDescription: 'Gospel Artiste',
    profile: 'Scott Michael Disick is an American media personality and socialite. He is most famous for starring as a main cast member on Keeping Up with the Kardashians and its spinoffs.[5][6] Disicks popularity on Keeping Up with the Kardashians led to the development of a house flipping show, Flip It Like Disick, that aired on E! Network',
  },
];

function showGuests(guest) {
  const guestCard = `<div class="guest">
  <div class="image_design">
    <img src="${guest.images.imagesUrl}" alt="${guest.images.imagesAlt}">
  </div>
  <aside>
    <div>
      <h4>${guest.name}</h4>
      <p>${guest.shortDescription}</p>
      <hr width="30">
    </div>
    <span>${guest.profile}</span>
  </aside>
</div>`;
  return guestCard;
}

const sectionForGuests = document.querySelector('.guest_list');

function showMyGuests() {
  const guestKeys = Object.keys(speakers);
  const guestKeysLength = Object.keys(speakers).length;
  for (let i = 0; i < guestKeysLength; i++) {
    sectionForGuests.innerHTML += showGuests(speakers[guestKeys[i]], i);
  }
}

sectionForGuests.onresize = showMyGuests();




