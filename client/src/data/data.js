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
];
