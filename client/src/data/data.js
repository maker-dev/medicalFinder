import aIcons from "../Assets/Icons";
export const categories = [
  { name: "Pain Relief", imgUrl: aIcons.painIc },
  { name: "Cold and Flu Remedies", imgUrl: aIcons.winterIc },
  { name: "First Aid Essentials", imgUrl: aIcons.aidIc },
  { name: "Allergy Relief", imgUrl: aIcons.shieldIc },
  { name: "Skin Care", imgUrl: aIcons.cleanIc },
  { name: "Vitamins and Supplements", imgUrl: aIcons.pillsIc },
];
export const products = [
  {
    new: true,
    title: "Aspirin",
    notif: false,
    imgUrl: aIcons.prodIc_1,
    description:
      "Used for pain relief, fever reduction, and anti-inflammatory purposes.",
  },
  {
    new: false,
    notif: true,
    title: "Acetaminophen (Tylenol)",
    imgUrl: aIcons.prodIc_2,
    description: "Commonly used for pain relief and reducing fever.",
  },
  {
    new: false,
    notif: true,
    title: "Motrin",
    imgUrl: aIcons.prodIc_3,
    description: "An over-the-counter nonsteroidal anti-inflammatory drug (NSAID) for pain and inflammation.",
  },  {
    new: false,
    notif: true,
    title: "Zyrtec",
    imgUrl: aIcons.prodIc_4,
    description: "Used to relieve allergy symptoms such as sneezing, itching, and runny nose.",
  },  {
    new: false,
    notif: true,
    title: "Nexium",
    imgUrl: aIcons.prodIc_5,
    description: "Used to treat conditions like acid reflux and peptic ulcers.",
  },  {
    new: false,
    notif: true,
    title: "Rolaids",
    imgUrl: aIcons.prodIc_6,
    description: "Over-the-counter medications to relieve heartburn and indigestion.",
  },
];
export const pharmacies = [
  {
    imgUrl: aIcons.phaIcDefault,
    name: "Healthy Haven Pharmacy",
    location: "123 Main Street, Cityville",
    op_hours: "9:00 AM - 7:00 PM",
    rating: "4.5 stars",
    description: "Lorem ipsum dolor sit amet consectetur. Pellentesque elementum gravida sit dolor id. At nulla gravida aenean senectus ac aliquet viverra faucibus. Iaculis tempor in elit mauris nunc iaculis fermentum amet elementum. A vel donec eu sapien. Placerat lectus volutpat sed pellentesque nullam aliquet ac. ",
  },
  {
    imgUrl: aIcons.phaIcDefault,
    name: "Wellness Corner Pharmacy",
    location: "456 Oak Avenue, Townsville",
    op_hours: "8:00 AM - 8:00 PM",
    rating: "4.2 stars",
    description: "Lorem ipsum dolor sit amet consectetur. Pellentesque elementum gravida sit dolor id. At nulla gravida aenean senectus ac aliquet viverra faucibus. Iaculis tempor in elit mauris nunc iaculis fermentum amet elementum. A vel donec eu sapien. Placerat lectus volutpat sed pellentesque nullam aliquet ac. ",
  },
  {
    imgUrl: aIcons.phaIcDefault,
    name: "Swift Pharmacy Solutions",
    location: "101 Pine Lane, Speedy Town",
    op_hours: "7:00 AM - 9:00 PM",
    rating: "4.0 stars",
    description: "Lorem ipsum dolor sit amet consectetur. Pellentesque elementum gravida sit dolor id. At nulla gravida aenean senectus ac aliquet viverra faucibus. Iaculis tempor in elit mauris nunc iaculis fermentum amet elementum. A vel donec eu sapien. Placerat lectus volutpat sed pellentesque nullam aliquet ac. ",
  },
  {
    imgUrl: aIcons.phaIcDefault,
    name: "City Health Pharmacy",
    location: "789 Elm Street, Metro City",
    op_hours: "24/7",
    rating: "4.7 stars",
    description: "Lorem ipsum dolor sit amet consectetur. Pellentesque elementum gravida sit dolor id. At nulla gravida aenean senectus ac aliquet viverra faucibus. Iaculis tempor in elit mauris nunc iaculis fermentum amet elementum. A vel donec eu sapien. Placerat lectus volutpat sed pellentesque nullam aliquet ac. ",
  },
]
export const cities = ["10 metters","1 Km"," 3 km ata least"];
export const customer_rating = ["3 stars","1 star"," 5 stars"];