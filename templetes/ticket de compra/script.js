const rawProductData = [
	[
		{
			productTitle: "CVS Health Non-Drowsy Allergy Relief Tablets, 70 CT",
			price: "24.99"
		},
		{
			productTitle: "CVS Health 100% Pure Omega-3 Krill Oil Softgels, 350mg",
			price: "37.99"
		},
		{
			productTitle: "CVS Health Multi-Symptom Nasal Allergy Spray 0.37 OZ",
			price: "12.99"
		},
		{
			productTitle:
				"CVS Health Original Prescription Strength Allergy Relief, 70 CT",
			price: "29.99"
		},
		{
			productTitle: "M&M's Peanut Milk Chocolate Sharing Size, 10.7 OZ",
			price: "4.19"
		},
		{
			productTitle: "M&M's Milk Chocolate Sharing Size, 10.7 OZ",
			price: "4.19"
		},
		{
			productTitle: "M&M's Peanut Butter Milk Chocolate Sharing Size, 9.6 OZ",
			price: "4.19"
		},
		{
			productTitle:
				"Playtex Sport Tampons Multi-Pack, Unscented, Regular and Super Absorbency",
			price: "8.49"
		},
		{
			productTitle:
				"Depend FIT-FLEX Incontinence Underwear for Men, Maximum Absorbency, XL, Gray (Packaging may vary)",
			price: "14.99"
		},
		{
			productTitle:
				"Depend FIT-FLEX Incontinence Underwear for Women, Maximum Absorbency, L",
			price: "19.79"
		},
		{
			productTitle:
				"Depend FIT-FLEX Incontinence Underwear for Women, Maximum Absorbency, S, Tan (Packaging may vary)",
			price: "14.99"
		},
		{
			productTitle:
				"Depend FIT-FLEX Incontinence Underwear for Women, Maximum Absorbency, XL, Tan (Packaging may vary)",
			price: "19.79"
		},
		{
			productTitle: "First Response Triple Check Pregnancy Test Kit, 3 CT",
			price: "23.99"
		},
		{
			productTitle: "Stayfree Maxi Pads with Wings, Super",
			price: "7.59"
		},
		{
			productTitle: "Playtex Sport Tampons, Unscented, Regular Absobency",
			price: "5.29"
		},
		{
			productTitle: "M&M'S Pretzel Chocolate Candy Sharing Size, 8 OZ",
			price: "4.19"
		},
		{
			productTitle:
				"ChapStick Original Moisturizer SPF 15 Sunscreen and Skin Protectant, 0.45 OZ, 3 CT",
			price: "4.49"
		},
		{
			productTitle:
				"O.B. Pro Comfort Multi-Pack Tampons, Regular and Super Absorbency",
			price: "8.29"
		},
		{ productTitle: "Febreze Unstopables Air Refresher", price: "5.99" },
		{
			productTitle: "Life Savers Neons Gummies Candy, 7 OZ",
			price: "2.99"
		}
	],
	[
		{
			productTitle: "M&M'S Peanut Dark Chocolate Candy Sharing Size, 10.1 OZ",
			price: "4.19"
		},
		{
			productTitle: "O.B. Pro Comfort Tampons, Regular Absorbency",
			price: "8.29"
		},
		{
			productTitle: "M&M'S Coffee Nut Peanut Chocolate Candy Sharing Size, 9.6 OZ",
			price: "4.19"
		},
		{
			productTitle:
				"Schwarzkopf Got 2Bb Phenomenal Thickening Styling Cream, 6 OZ",
			price: "7.99"
		},
		{
			productTitle:
				"Depend Night Defense Incontinence Overnight Underwear for Women, M",
			price: "13.49"
		},
		{
			productTitle: "Lindt Lindor Fudge Swirl Milk Chocolate Truffles",
			price: "5.79"
		},
		{
			productTitle: "HERSHEY'S Cookie Layer Crunch Triple Chocolate",
			price: "4.99"
		},
		{
			productTitle:
				"Playtex Sport Fresh Balance Lightly Scented Tampons, Super Absorbency",
			price: "8.99"
		},
		{
			productTitle: "M&M'S Crispy Chocolate Candy Sharing Size, 8 OZ",
			price: "4.19"
		},
		{
			productTitle:
				"Everpro Gray Away For Women Temporary Root Concealer, Lightest Brown/Medium Blonde",
			price: "10.29"
		},
		{
			productTitle: "Epi Smooth - Removes Hair At The Root",
			price: "9.99"
		},
		{
			productTitle: "Godiva Masterpieces An Assortment Of Legendary Chocolate",
			price: "5.79"
		},
		{
			productTitle:
				"Simply Saline Relieve + Protect Allergy Nasal Pump Mist, 0.67 OZ",
			price: "10.29"
		},
		{
			productTitle: "CVS Moderate Absorbency Protective Pads Long, 54 CT",
			price: "11.99"
		},
		{
			productTitle: "Color Doctor Blood Pressure Monitor",
			price: "19.99"
		},
		{ productTitle: "MagicBax Earring Lifters", price: "19.99" },
		{
			productTitle:
				"Depend Night Defense Incontinence Overnight Underwear for Women, XL",
			price: "13.49"
		},
		{
			productTitle: "Schick Xtreme 4 Disposable Razor for Men, 3 CT",
			price: "8.99"
		},
		{ productTitle: "Jif Natural Creamy Peanut Butter", price: "3.79" },
		{
			productTitle: "Flex Tape Strong Rubberized Waterproof Tape 4\" x 5'",
			price: "12.99"
		}
	],
	[
		{
			productTitle: "CVS Health Butenafine Hydrochloride Antifungal Cream 1%",
			price: "10.49"
		},
		{
			productTitle: "DOVE Cashews With Sea Salt and Milk Chocolate Candy, 5 OZ",
			price: "4.89"
		},
		{ productTitle: "Tresemme Fresh Dry Shampoo, 4.3 OZ", price: "6.29" },
		{ productTitle: "Wipe New Headlight Restore", price: "9.99" },
		{
			productTitle: "Beauty 360 Charcoal Cleansing Bath Pouf",
			price: "3.99"
		},
		{
			productTitle: "Style Essentials by Hanes Ladies' Trouser Socks, 3 Pairs",
			price: "6.79"
		},
		{
			productTitle: "Atomic Beam Tough Grade Military Light",
			price: "19.99"
		},
		{
			productTitle: "AXE Styling Urban Messy Look Matte Wax, 2.64 OZ",
			price: "10.79"
		},
		{
			productTitle: "Depend Incontinence Shields for Men, Light Absorbency",
			price: "13.49"
		},
		{
			productTitle: "DOVE Cashews With Cocoa and Dark Chocolate Candy, 5 OZ",
			price: "4.89"
		},
		{
			productTitle: "Aussie Total Miracle 7N1 Conditioner, 26.2 OZ",
			price: "7.29"
		},
		{
			productTitle: "Aussie Total Miracle 7N1 Shampoo, 26.2 OZ",
			price: "7.29"
		},
		{
			productTitle: "California Charcoal Activated Charcoal Peel-Off Mask, 2.8 OZ",
			price: "19.99"
		},
		{
			productTitle: "Bell + Howell Taclight Lantern With Magnetic Base",
			price: "19.99"
		},
		{
			productTitle: "Dove Almonds With Cinnamon and Dark Chocolate Candy, 5.5 OZ",
			price: "4.89"
		},
		{
			productTitle:
				"Egglettes Egg Cooker - Hard Boiled Eggs Without the Shell, 4 CT",
			price: "9.99"
		},
		{
			productTitle: "CVS Health Variety Pack Bandage Assortment, 120 CT",
			price: "12.99"
		},
		{ productTitle: "Fuller Brush Roto Sweeper Broom", price: "19.99" },
		{
			productTitle: "Finishing Touch Flawless Facial Hair Remover, Purple",
			price: "19.99"
		},
		{
			productTitle: "Wrigley's Juicy Fruit Mixies Sugarfree Gum, 40 CT",
			price: "4.89"
		}
	],
	[
		{
			productTitle: "M&M'S Milk Chocolate MINIS Candy Sharing Size, 10.1 OZ",
			price: "4.19"
		},
		{
			productTitle: "Trident White Sugar Free Gum, Peppermint 60 CT",
			price: "4.99"
		},
		{
			productTitle: "Air Hawk Pro Automatic Cordless Tire Inflator",
			price: "39.99"
		},
		{
			productTitle:
				"Active Bright Natural Teeth Whitening Activated Coconut Charcoal Powder",
			price: "9.99"
		},
		{
			productTitle: "Dove Anti-Stress Micellar Water Body Wash, 22 OZ",
			price: "8.99"
		},
		{ productTitle: "CVS  Health Cone Face Masks, 10 CT", price: "8.29" },
		{
			productTitle: "Crest Pro-Health Advanced Toothpaste 3.5 OZ, Deep Clean Mint",
			price: "2.99"
		},
		{
			productTitle: "Gold Emblem Abound Sweet Sriracha Roasted Chickpeas, 5 OZ",
			price: "3.49"
		},
		{ productTitle: "Wonder Hanger Max 10 Pack", price: "14.99" },
		{
			productTitle: "NeilMed Porcelain Neti Pot Allergy Relief",
			price: "15.49"
		},
		{ productTitle: "Splat Midnight Hair Color, Ruby", price: "12.99" },
		{
			productTitle: "Chap Stick Total Hydration 3 In 1 Lip Care",
			price: "3.99"
		},
		{
			productTitle: "Marc Anthony Strengthening Grow Long Conditioner, 8.4 OZ",
			price: "8.69"
		},
		{
			productTitle: "Marc Anthony Grow Long Caffeine Shampoo, 8.4 OZ",
			price: "8.69"
		},
		{
			productTitle: "CVS Health Crew Comfort Socks for Diabetics, 2 Pairs",
			price: "6.29"
		},
		{ productTitle: "Splat Midnight Hair Color, Indigo", price: "12.99" },
		{
			productTitle: "Nexxus Keraphix Damage Healing Treatment Masque",
			price: "3.29"
		},
		{
			productTitle: "Ghirardelli Intense Dark Salted Caramel Crunch",
			price: "5.79"
		},
		{
			productTitle: "Dove Anti-Stress Micellar Beauty Bar, 6 CT",
			price: "8.99"
		},
		{
			productTitle: "Estroven Mood & Memory Caplets 30 CT",
			price: "17.99"
		}
	],
	[
		{
			productTitle: "Pocket Mouse Wireless Mouse You Hold Like A Pen",
			price: "19.99"
		},
		{
			productTitle: "Dove Men +Care Clean Comfort Body+Face Wash, 23.5 OZ",
			price: "10.99"
		},
		{ productTitle: "Febreze One Car Air Freshener", price: "4.19" },
		{
			productTitle: "CVS Health Breathable Gentle Tape, 2 CT",
			price: "7.19"
		},
		{
			productTitle: "CVS Health Advanced Healing Hydrocolloid Adhesive Pads",
			price: "15.49"
		},
		{
			productTitle:
				"ChapStick Total Hydration 3-in-1 Soothing Oasis Lip Care, 0.12 OZ",
			price: "3.79"
		},
		{
			productTitle: "Crest Pro-Health with a Touch of Scope Toothpaste, 4.6 OZ",
			price: "2.99"
		},
		{
			productTitle: "Schwarzkopf Got 2b Phenomenal Light Hold Styling Gel, 6 OZ",
			price: "8.29"
		},
		{ productTitle: "Pill Pro Weekly Pill Organizer", price: "9.99" },
		{
			productTitle:
				"FUTURO Anti-Embolism Stockings, Thigh Length, Closed Toe, Medium, Regular, White",
			price: "44.49"
		},
		{
			productTitle:
				"Salon on 5th Ave/NYC Root Cover-Up Temporary Concealer Spray, 2 OZ",
			price: "9.29"
		},
		{
			productTitle: "CVS Health Children's Allergy Liquid, 4 OZ",
			price: "8.99"
		},
		{
			productTitle: "CVS Health Maximum Strength Lidocaine Cream",
			price: "7.79"
		},
		{
			productTitle: "Splat Midnight Hair Color, Amethyst",
			price: "12.99"
		},
		{
			productTitle:
				"The Mane Choice Crystal Orchid Biotin Infused Styling Gel, 16 OZ",
			price: "11.99"
		},
		{
			productTitle: "Flex Seal Liquid Rubber Sealant Coating, Black 16 OZ",
			price: "14.99"
		},
		{
			productTitle: "Nexxus Humectress Replenishing System Conditioner, 3 OZ",
			price: "4.99"
		},
		{ productTitle: "Copper Crisper 2-Piece Tray Set", price: "19.99" },
		{
			productTitle: "Bell + Howell Solar Powered LED Disk Lights, 4 CT",
			price: "19.99"
		},
		{
			productTitle:
				"CVS Health Lansoprazole Delayed Release Tablets, Strawberry, 15 mg, 42 CT",
			price: "17.99"
		}
	],
	[
		{
			productTitle: "John Frieda Radiant Red Red Boosting Conditioner, 8.3 OZ",
			price: "12.49"
		},
		{
			productTitle: "Bell + Howell Polarized Lens Tac Glasses",
			price: "19.99"
		},
		{
			productTitle: "Nexxus New York Salon Care Therappe Shampoo, 3 OZ",
			price: "3.59"
		},
		{
			productTitle: "CVS Health Isopropyl Rubbing Alcohol Push Pump",
			price: "4.19"
		},
		{ productTitle: "EZ Makeup Glasses", price: "14.99" },
		{
			productTitle: "CVS Health Sterile Saline Wound Wash",
			price: "9.29"
		},
		{ productTitle: "CVS Health Sinus Wash Neti Pot Kit", price: "12.49" },
		{
			productTitle: "CVS Health Witch Hazel Push Pump, 8 OZ",
			price: "5.99"
		},
		{
			productTitle: "CVS Health Temporary Lost Filling & Loose Cap Repair",
			price: "5.59"
		},
		{
			productTitle:
				"CVS Health Reagent Strips for Urinanalysis Ketone Test Strips, 50CT",
			price: "7.69"
		},
		{
			productTitle: "CVS Health Shower Reliever Effervescent Vapor Tablets",
			price: "4.59"
		},
		{
			productTitle: "CVS Health Cool Mist Humidifier Super-fine Cool Mist",
			price: "29.99"
		},
		{
			productTitle: "CVS Health Fluticasone Nasal Spray 50mcg, 120 Sprays",
			price: "18.49"
		},
		{
			productTitle: "CVS Health Magnesium Citrate Oral Solution 10 OZ, Grape",
			price: "2.89"
		},
		{
			productTitle: "CVS Health Advanced Blood Glucose Meter",
			price: "16.49"
		},
		{
			productTitle:
				"CVS Health Acid Reducer Lansoprazole Delayed-Release Capsules 15mg",
			price: "12.49"
		},
		{
			productTitle: "CVS Health Procedural Face Masks With Earloops",
			price: "7.99"
		},
		{
			productTitle: "CVS Health Automatic Blood Pressure Monitor",
			price: "37.79"
		},
		{
			productTitle: "CVS Health Anti-Diarrheal Caplets, 200CT",
			price: "18.99"
		},
		{ productTitle: "CVS Health Digital Body Scale", price: "7.69" }
	],
	[
		{
			productTitle: "Nerve Pain Away Homeopathic  Pain Reliever Spray",
			price: "14.99"
		},
		{
			productTitle: "CVS Health Warm Steam Vaporizer 2100cvs",
			price: "18.29"
		},
		{
			productTitle: "CVS Health Reusable Cold Pain Relief Pack",
			price: "7.19"
		},
		{
			productTitle: "Homeopathic  CVS Health Nasal Aspirator, 1 EA",
			price: "14.99"
		},
		{ productTitle: "MiraLAX Laxative Powder", price: "17.79" },
		{
			productTitle: "Imodium Multi-Symptom Relief Caplets, 12CT",
			price: "7.49"
		},
		{ productTitle: "CVS Health Icthammol Ointment, 1 OZ", price: "9.29" },
		{
			productTitle: "Gotham Steel Crisper Tray 2-Piece Set",
			price: "19.99"
		},
		{
			productTitle: "Differin Adapalene Gel 0.1% Acne Treatment",
			price: "29.99"
		},
		{
			productTitle: "Homeopathic Oscillococcinum Quick Dissolve Pallets",
			price: "35.49"
		},
		{
			productTitle: "Nexxus Keraphix Damage Healing Conditioner, 3 OZ",
			price: "5.49"
		},
		{ productTitle: "L'Oreal Paris Excellence Hair Color", price: "9.49" },
		{
			productTitle:
				"Prilosec OTC Frequent Heartburn Medicine and Acid Reducer Tablets",
			price: "19.49"
		},
		{ productTitle: "CVS Health Ear Wax Removal Syringe", price: "7.29" },
		{ productTitle: "Revlon ColorStay Brow Pencil", price: "9.49" },
		{ productTitle: "CVS Health Castor Oil", price: "4.99" },
		{
			productTitle: "Navage Nasal Care Saline Nasal Irrigation Kit",
			price: "87.99"
		},
		{
			productTitle: "NeilMed Sinu Inhaler Non-Medicated Aromatherapy Inhaler",
			price: "5.49"
		},
		{
			productTitle:
				"Omron 3 Series One Touch Blood Pressure Monitor With D-Ring Cuff, BP 710N",
			price: "28.79"
		},
		{ productTitle: "CVS Health Saline Nasal Spray", price: "5.99" }
	],
	[
		{
			productTitle:
				"Apothecare Essentials The Replenisher Cleansing Conditioner, Vanilla Argan Oil Sweet Almond, 16 OZ",
			price: "12.99"
		},
		{ productTitle: "CVS Health Steam Inhaler", price: "39.99" },
		{
			productTitle: "Aquaphor Advanced Therapy Healing Ointment, 1.75 OZ",
			price: "6.99"
		},
		{
			productTitle:
				"Batiste Instant Hair Refresh Dry Shampoo Plus, Deep & Dark Brown",
			price: "9.79"
		},
		{
			productTitle: "Cremo Beard Brush, 100% Natural Boar Bristle",
			price: "12.79"
		},
		{
			productTitle: "CVS Health Arm Sling Adult with Adjustable Fastener",
			price: "11.29"
		},
		{
			productTitle:
				"Primatene Mist Epinephrine Inhalation Aerosol, 0.125mg per spray",
			price: "29.99"
		},
		{
			productTitle: "CVS Health Finger Splint Deluxe Aluminum/Foam",
			price: "6.49"
		},
		{
			productTitle: "CVS Health Adult Overnight Underwear, Large",
			price: "7.69"
		},
		{ productTitle: "Sambucol Original Syrup, 4 OZ", price: "15.79" },
		{
			productTitle: "CVS Health Rigid Tip Digital Thermometer",
			price: "8.59"
		},
		{
			productTitle:
				"Nature's Bounty Optimal Solutions Hair, Skin and Nails Gummies, 80CT",
			price: "9.99"
		},
		{
			productTitle: "Vicks VapoRub Cough Suppressant Topical Analgesic Ointment",
			price: "7.49"
		},
		{
			productTitle: "Homeopathic  Similasan Pink Eye Relief Drops, .33 OZ",
			price: "11.29"
		},
		{ productTitle: "Zyrtec Allergy Tablets 10mg", price: "19.99" },
		{
			productTitle:
				"CVS Health Automatic Wrist Blood Pressure Monitor, One Size Fits All",
			price: "37.79"
		},
		{
			productTitle: "Marc Anthony True Professional 100% Coconut Oil, 10 OZ",
			price: "10.79"
		},
		{ productTitle: "Bavarian Edge Knife Sharpener", price: "19.99" },
		{
			productTitle:
				"Garnier SkinActive Micellar Cleansing Water All in 1 Cleanser & Waterproof Makeup Remover, 13.15 OZ",
			price: "9.79"
		},
		{
			productTitle:
				"Flonase 24hr Allergy Relief Nasal Spray, Full Prescription Strength",
			price: "21.99"
		}
	],
	[
		{
			productTitle: "CVS Health Gel Metatarsal Cushions, 1 EA",
			price: "7.99"
		},
		{
			productTitle: "CVS Health Caladrox Ointment Skin Protectant & Itch Relief",
			price: "4.99"
		},
		{
			productTitle: "CVS Health Comfort Nightime Dental Guards",
			price: "29.49"
		},
		{ productTitle: "CVS Health Gel Bunion Wrap, 1 EA", price: "7.49" },
		{
			productTitle: "Nexium 24HR Heartburn Relief Capsules, Acid Reducer",
			price: "19.49"
		},
		{
			productTitle: "CVS Health Omeprazole Tablets 20mg, 42CT",
			price: "16.49"
		},
		{
			productTitle: "CVS Health Advanced TENS Targeted Muscle Therapy",
			price: "58.49"
		},
		{ productTitle: "Revlon ColorStay Pressed Powder", price: "11.49" },
		{
			productTitle: "CVS Health 91% Isopropyl Alcohol, 32 OZ",
			price: "2.59"
		},
		{
			productTitle:
				"Limited Edition Beauty Mark T-Shirt, 100% of proceeds support, Girls Inc.",
			price: "30.00"
		},
		{
			productTitle: "Nexium 24HR, 20 mg, Heartburn Relief Tablets, Acid Reducer",
			price: "10.99"
		},
		{
			productTitle: "CVS Health Stool Softener 100 mg Softgels",
			price: "4.79"
		},
		{
			productTitle:
				"CVS Health Wound Closure Adhesive Surgical Tape Strips, All one Size",
			price: "9.29"
		},
		{ productTitle: "CVS Health Medicated Foot Powder", price: "8.99" },
		{
			productTitle: "Maybelline Fit Me! Matte + Poreless Foundation",
			price: "7.99"
		},
		{ productTitle: "CVS Health Concave Eye Patch", price: "5.29" },
		{ productTitle: "Stye Eye Ointment", price: "11.49" },
		{ productTitle: "Hibiclens Liquid", price: "13.49" },
		{
			productTitle: "Nexxus Keraphix Damage Healing Shampoo, 3 OZ",
			price: "3.99"
		},
		{
			productTitle:
				"CVS Health Single-Use Povidone-Iodine Swabsticks First Aid Antiseptic",
			price: "6.19"
		}
	],
	[
		{ productTitle: "CVS Health Bath Chair", price: "41.99" },
		{ productTitle: "Trojan Magnum 8=D Condoms 24pk ", price: "24.99" },
		{ productTitle: "PedEgg Easy Curve", price: "9.99" },
		{
			productTitle:
				"CVS Health Great Tasting Melatonin Gummy Sleep Aid Strawberry",
			price: "10.99"
		},
		{
			productTitle: "Zantac 150 Maximum Strength Tablets",
			price: "19.99"
		},
		{
			productTitle: "CVS Health Fabric Heating Pad, Series 700",
			price: "32.99"
		},
		{
			productTitle: "CVS Health Probiotic Capsules Maximum Strength, 30CT",
			price: "12.99"
		},
		{ productTitle: "IBgard Capsules", price: "11.79" },
		{
			productTitle:
				"Crest 3D White Whitestrips Glamorous White Teeth Whitening Kit, 28/Pack",
			price: "44.99"
		},
		{ productTitle: "CVS Health Liquid Bandage", price: "4.39" },
		{
			productTitle: "CVS Health Clotrimazole 3 Vaginal Cream (2%)",
			price: "14.99"
		},
		{ productTitle: "FUTURO Deluxe Thumb Stabilizer", price: "17.99" },
		{
			productTitle: "CVS Health GlutenAid Capsules, 30 CT",
			price: "13.49"
		},
		{ productTitle: "CVS Health Tussin Cough Liquid Gels", price: "5.49" },
		{
			productTitle: "Lip Clear Lysine+ Cold Sore Treatment",
			price: "10.99"
		},
		{ productTitle: "Colgate Total Pro-Shield Mouthwash", price: "5.49" },
		{
			productTitle: "Pepto-Bismol Maximum Strength Liquid, 8 OZ",
			price: "5.99"
		},
		{
			productTitle: "CVS Health Nicotine Transdermal System Patches, Step 1, 21mg",
			price: "39.99"
		},
		{
			productTitle: "ZzzQuil Nighttime Sleep Aid LiquiCaps",
			price: "10.99"
		},
		{
			productTitle: "Twin Draft Ultimate Double-Sided Insulator",
			price: "12.99"
		},
		{ productTitle: "Peach Slices Acne Patches, 0.88 OZ", price: "4.49" }
	],
	[
		{ productTitle: "Peach Slices Acne Patches, 0.88 OZ", price: "4.49" },
		{ productTitle: "Debrox Earwax Removal Kit", price: "10.49" },
		{
			productTitle: "Dulcolax Laxative Tablets for Overnight Relief",
			price: "10.29"
		},
		{ productTitle: "Sunbeam XpressHeat Heating Pad XL", price: "43.29" },
		{
			productTitle: "Olay Regenerist Micro-Sculpting Cream",
			price: "10.49"
		},
		{ productTitle: "Neilmed Sinus Rinse Kit", price: "16.99" },
		{
			productTitle:
				"Lactaid Fast Act Lactose Intolerance Caplets, Travel Packs of 1 CT.",
			price: "12.99"
		},
		{
			productTitle:
				"Maybelline Instant Age Rewind Eraser Dark Circles Treatment Concealer",
			price: "9.99"
		},
		{
			productTitle: "Campho-Phenique Cold Sore Gel Original",
			price: "7.79"
		},
		{
			productTitle: "CVS Health Immediate Mouth Sore Relief Maximum Strength",
			price: "6.99"
		},
		{ productTitle: "L'Oreal Paris Root Cover Up", price: "11.99" },
		{
			productTitle: "CVS Health Reusable Cast & Wound Protector",
			price: "11.49"
		},
		{
			productTitle: "CVS Health Advanced Glucose Meter Test Strips, 100CT",
			price: "30.99"
		},
		{
			productTitle: "CVS Health Melatonin Capsules 10 mg",
			price: "18.29"
		},
		{
			productTitle: "Colgate Total Whitening Toothpaste Gel",
			price: "3.79"
		},
		{
			productTitle: "CVS Health Pediatric Electrolyte, Freezer Pops, Assorted",
			price: "5.29"
		},
		{
			productTitle: "CVS Health Epsom Salt Magnesium Sulfate USP, 96 OZ",
			price: "6.49"
		},
		{
			productTitle: "Pampers Baby Dry Super Pack Diapers",
			price: "29.99"
		},
		{
			productTitle: "CVS Health Maximum Strength Antacid Liquid Original",
			price: "4.99"
		},
		{
			productTitle: "CVS Health Pill Splitter with Safety Shield",
			price: "4.89"
		}
	],
	[
		{
			productTitle: "CVS Health Ibuprofen 200 mg Coated Tablets",
			price: "4.69"
		},
		{
			productTitle: "CVS Health Mint Flavored Orthodontic Wax",
			price: "3.09"
		},
		{
			productTitle: "CVS Health Sore Throat Relief Pops Assorted Flavors",
			price: "5.99"
		},
		{ productTitle: "CVS Health Sitz Bath", price: "11.99" },
		{
			productTitle: "CVS Health Advanced Glucose Meter Test Strips, 50ct",
			price: "8.49"
		},
		{
			productTitle: "Garnier Whole Blends Honey Treasures Repairing Shampoo",
			price: "4.99"
		},
		{ productTitle: "Gold Bond Ultimate Healing", price: "8.29" },
		{
			productTitle: "CVS Health Clotrimazole Cream Usp 1%, 1 OZ",
			price: "10.99"
		},
		{
			productTitle:
				"Ultra Moisture Olay Ultra Moisture Shea Butter Body Wash, 22 OZ",
			price: "6.00"
		},
		{
			productTitle: "CVS Health All-Natural 100% Tea Tree Oil",
			price: "10.49"
		},
		{ productTitle: "Scotch Lint Roller 56 Sheets", price: "5.29" },
		{
			productTitle: "CVS Health Hydrogen Peroxide Solution",
			price: "1.39"
		},
		{
			productTitle: "CVS Health Vitamin D Softgels 2000IU",
			price: "19.29"
		},
		{
			productTitle: "CVS Health Children's Fever Reducing Suppositories",
			price: "10.79"
		},
		{
			productTitle: "CVS Health Vitamin B12 Tablets 1000mcg",
			price: "11.49"
		},
		{
			productTitle:
				"CVS Health Miconazole Yeast Infection Relief 1-Day Treatment; Day or Night",
			price: "16.49"
		},
		{
			productTitle: "CVS Health Chest Congestion Relief Tablets",
			price: "10.99"
		},
		{
			productTitle: "Pampers Baby Dry Jumbo Pack Diapers",
			price: "12.49"
		},
		{ productTitle: "Wrigley's Orbit Gum, 40 CT", price: "4.89" },
		{ productTitle: "CVS Health Bacitracin Ointment, 1 OZ", price: "4.99" }
	],
	[
		{
			productTitle: "CVS Health Maximum Strength Urinary Pain Relief Tablets",
			price: "6.79"
		},
		{
			productTitle:
				"CVS Health 4-Hour Allergy Relief Chlorpheniramine Maleate Tablets, 100 CT",
			price: "12.99"
		},
		{
			productTitle: "CVS Health Cough Drops Menthol Cough Suppressant",
			price: "2.19"
		},
		{
			productTitle: "CVS Health Allergy Relief Non-Drowsy Fexofenadine Tablets",
			price: "11.99"
		},
		{
			productTitle: "CVS Health Adult Electrolyte with Zinc",
			price: "5.29"
		},
		{
			productTitle: "CVS Health Magnesium Citrate Oral Solution 10 OZ, Lemon",
			price: "2.89"
		},
		{
			productTitle: "Pampers Sensitive Baby Wipes 3 Pack, 168CT",
			price: "9.79"
		},
		{ productTitle: "CVS Health Eye Wash Soothing", price: "5.79" },
		{
			productTitle:
				"CVS Health Original Prescription Strength Purelax Powder Laxative",
			price: "5.49"
		},
		{
			productTitle: "CVS Health Natural Daily Fiber Capsules",
			price: "12.49"
		},
		{ productTitle: "CVS Health At Home A1C Test Kit", price: "27.99" },
		{
			productTitle:
				"CVS Health Sinus Nasal Spray Oxymetazoline HCl- Nasal Decongestant, 1 OZ",
			price: "7.59"
		},
		{
			productTitle: "Pampers Baby Dry Jumbo Pack Diapers",
			price: "12.49"
		},
		{
			productTitle: "CVS Health Turmeric Capsules 500mg, 60CT",
			price: "10.49"
		},
		{
			productTitle: 'Caliber Printer Paper,  8 1/2" x 11", 20 Lb., 92 Bright',
			price: "6.99"
		},
		{
			productTitle: "CVS Health Fast Relief Sore Throat Spray",
			price: "5.99"
		},
		{ productTitle: "Pampers Sensitive Baby Wipes, 56CT", price: "2.99" },
		{
			productTitle: "CVS Original Strength Antibiotic Ointment",
			price: "12.79"
		},
		{
			productTitle: "CVS Health Antiseptic Skin Cleanser",
			price: "11.29"
		},
		{
			productTitle:
				"CVS Health Extra Strength Pain Relief Adult Liquid Rapid Burst, Cherry, 8 OZ",
			price: "6.79"
		}
	],
	[
		{
			productTitle: "CVS Health Turmeric Capsules 500mg, 60CT",
			price: "10.49"
		},
		{
			productTitle: "CVS Health Glucosamine Chondroitin Triple Strength Caplets",
			price: "39.49"
		},
		{
			productTitle: "CVS Health Antiseptic Skin Cleanser",
			price: "11.29"
		},
		{
			productTitle:
				"CVS Health Extra Strength Pain Relief Adult Liquid Rapid Burst, Cherry, 8 OZ",
			price: "6.79"
		},
		{
			productTitle: 'Caliber Printer Paper,  8 1/2" x 11", 20 Lb., 92 Bright',
			price: "6.99"
		},
		{
			productTitle: "CVS Health Fast Relief Sore Throat Spray",
			price: "5.99"
		},
		{
			productTitle: "Garnier Whole Blends Honey Treasures Repairing Conditioner",
			price: "4.99"
		},
		{
			productTitle: "CVS Original Strength Antibiotic Ointment",
			price: "12.79"
		},
		{
			productTitle: "CVS Health Ultra Soft Cleansing Wipes Solo SoftPak",
			price: "7.29"
		},
		{
			productTitle:
				"CVS Health Maximum Strength Nightime Sleep Aid Softgels 50 mg",
			price: "8.49"
		},
		{
			productTitle: "Cepacol Maximum Strength Throat Drop Lozenges",
			price: "5.79"
		},
		{
			productTitle: "One A Day VitaCraves Women's Multivitamin Gummies",
			price: "9.99"
		},
		{
			productTitle: "CVS Health Acid Reducer Tablets Maximum Strength",
			price: "20.99"
		},
		{
			productTitle:
				"Airborne Vitamin C 1000mg Immune Support Supplement, Effervescent Formula",
			price: "20.99"
		},
		{
			productTitle:
				"CVS Health Omeprazole Magnesium Acid Reducer 20 mg Delayed Release Capsules",
			price: "12.49"
		},
		{
			productTitle: "Pampers Sensitive Baby Wipes 3 Pack Refill, 192 CT",
			price: "8.99"
		},
		{
			productTitle: "CVS Health Peas Hot or Cold Therapy Pack",
			price: "26.99"
		},
		{
			productTitle: "CVS Health Fluticasone 50mcg Nasal Spray 120 CT, 2 PK",
			price: "29.49"
		},
		{
			productTitle: "CVS Health Non-Drowsy Nasal Decongestant PE, 10mg, 18 CT",
			price: "4.89"
		},
		{
			productTitle: "CVS Health Super B Complex with Vitamin C Caplets",
			price: "10.79"
		}
	],
	[
		{
			productTitle: "Cepacol Maximum Strength Throat Drop Lozenges",
			price: "5.79"
		},
		{ productTitle: "CVS Health Weekly AM/PM Pill Case", price: "7.29" },
		{
			productTitle: "CVS Health Digital Flexible Tip Thermometer",
			price: "15.49"
		},
		{
			productTitle:
				"CVS Health Indoor/Outdoor Allergy Relief Cetirizine Hydrochloride Tablets 10 mg",
			price: "29.99"
		},
		{
			productTitle:
				"CVS Health Extra Strength Pain Relief Acetaminophen Gelcaps 500 mg, 150 CT",
			price: "11.79"
		},
		{
			productTitle:
				"CVS Health Extra Strength Pain Relief Acetaminophen Caplets 500 mg, 24 CT",
			price: "4.59"
		},
		{
			productTitle:
				"CVS Health Day & Night Maximum Absorbency Underpads Super Large, 30CT",
			price: "20.99"
		},
		{
			productTitle:
				"Airborne Vitamin C 1000mg Immune Support Supplement, Effervescent Formula",
			price: "20.99"
		},
		{
			productTitle: "CVS Health Low Dose Aspirin Enteric Coated Tablets 81 mg",
			price: "12.49"
		},
		{
			productTitle: "One A Day VitaCraves Women's Multivitamin Gummies",
			price: "9.99"
		},
		{ productTitle: "CVS Health Calamine Plus, 6 OZ", price: "7.99" },
		{
			productTitle: "CVS Health Durable Nitrile Exam Gloves, 50CT",
			price: "9.99"
		},
		{
			productTitle: "CVS Health Half the Size Fish Oil Softgels 1000mg, 200CT",
			price: "23.99"
		},
		{
			productTitle: "Coricidin HBP Cold and Flu Cold Relief Tablets, 20CT",
			price: "9.29"
		},
		{
			productTitle:
				"Clorox Disinfecting Wipes Value Pack, Bleach Free Cleaning Wipes",
			price: "6.59"
		},
		{
			productTitle: "CVS Health Tussin Non-Drowsy Cough Formula",
			price: "7.49"
		},
		{
			productTitle: "CVS Health Fast Acting Sore Throat Lozenges",
			price: "4.59"
		},
		{
			productTitle:
				"CVS Health Triple Antibiotic & Pain Relief Maximum Strength Ointment",
			price: "5.29"
		},
		{
			productTitle: "CVS Health 70% Isopropyl Rubbing Alcohol, Unscented",
			price: "2.39"
		},
		{
			productTitle: "Homeopathic  CVS Health EarAche Ear Drops, 0.33 OZ",
			price: "9.99"
		}
	],
	[
		{
			productTitle: "CVS Health Ibuprofen Liquid Filled Softegels 200 mg",
			price: "5.79"
		},
		{
			productTitle: "Clairol Nice n Easy Root Touch-Up Permanent Hair Color",
			price: "8.49"
		},
		{
			productTitle: "CVS Health Fluticasone Nasal Spray 60 Metered Sprays, 50 mcg",
			price: "12.99"
		},
		{ productTitle: "CVS Health Epsom Salt, 128 OZ", price: "7.99" },
		{
			productTitle: "CVS Health Ibuprofen Tablets Value Size 200mg, 500 CT",
			price: "16.49"
		},
		{ productTitle: "CVS Health Epsom Salt, 64 OZ", price: "3.39" },
		{
			productTitle: "Dove Dry Spray Antiperspirant Deodorant, 3.8 OZ",
			price: "8.49"
		},
		{ productTitle: "Nizoral A-D Anti-Dandruff Shampoo", price: "14.49" },
		{
			productTitle: "Poise Ultimate Absorbency Incontinence Pads",
			price: "19.99"
		},
		{
			productTitle: "CVS Health Hydrogen Peroxide Solution",
			price: "2.27"
		},
		{
			productTitle: "CVS Health Purelax Unflavored Powder, 8.3 OZ",
			price: "8.59"
		},
		{ productTitle: "L.A. Girl Eyeshadow Palette", price: "9.99" },
		{
			productTitle: "CVS Health Saline Nasal Spray Value Pack",
			price: "5.99"
		},
		{
			productTitle:
				"CVS Health Nasal Decongestant Non-Drowsy Phenylephrine Hydrochloride Tablets, 72 CT",
			price: "11.99"
		},
		{
			productTitle:
				"CVS Health Pediatric Electrolyte Oral Maintenance Solution Unflavored, 35.2 OZ",
			price: "5.29"
		},
		{
			productTitle: "Gold Emblem Deluxe Mixed Nuts No Peanuts",
			price: "11.99"
		},
		{
			productTitle: "CVS Health Vitamin D Softgels 5000IU, 100CT",
			price: "14.99"
		},
		{
			productTitle: "Gold Emblem Deluxe Mixed Nuts Lightly Salted, 18 OZ",
			price: "11.99"
		},
		{
			productTitle:
				"CVS Health Maximum Strength Cortisone Anti-Itch Cream Plus Aloe",
			price: "7.49"
		},
		{
			productTitle:
				"CVS Health Low Dose Aspirin 81mg Enteric Coated Tablets, 120 CT",
			price: "6.79"
		}
	],
	[
		{
			productTitle:
				"CVS Health Junior Strength Ibuprofen Tablets Grape 100 mg, 24 CT",
			price: "5.79"
		},
		{ productTitle: "CVS Health Senna Laxative Tablets", price: "8.69" },
		{
			productTitle: "CVS Health Extra Strength Pain Relief 500 mg Caplets, 100 CT",
			price: "7.99"
		},
		{ productTitle: "CVS Alkaline Batteries AA 8-Pack", price: "6.79" },
		{
			productTitle:
				"CVS Health Nasal Decongestant Non-Drowsy Phenylephrine Hydrochloride Tablets, 72 CT",
			price: "11.99"
		},
		{
			productTitle: "CVS Health Senna Plus Laxative/Stool Softener Tablets",
			price: "14.79"
		},
		{
			productTitle:
				"CVS Health Ultra-Sensitive Ultra Gentle Wipes With Lotion, 56CT",
			price: "3.39"
		},
		{
			productTitle: "CVS Health Maximum Strength Sinus & Allergy Tablets",
			price: "5.69"
		},
		{ productTitle: "CVS Alkaline Batteries AAA 4-Pack", price: "4.49" },
		{
			productTitle:
				"CVS Health Women's Underwear Maximum Absorbency Large, Lavender, 32 CT",
			price: "17.99"
		},
		{
			productTitle: "Essence Of Beauty Mesh Bath Sponge, Black",
			price: "2.99"
		},
		{
			productTitle: "CVS Health Children's Ibuprofen Oral Suspension",
			price: "6.99"
		},
		{
			productTitle: "Maybelline Great Lash Washable Mascara",
			price: "5.99"
		},
		{
			productTitle:
				"CVS Health Prenatal Gummy Vitamins with DHA & Folic Acid Gummies",
			price: "12.49"
		},
		{
			productTitle: "CVS Health Rubber Finger Protectors, 30CT",
			price: "6.29"
		},
		{
			productTitle:
				"CVS Health Small Size Allergy Diphenydramine Hydrochloride Tablets",
			price: "4.89"
		},
		{
			productTitle: "Beauty 360 Premium 100% Cotton Squares, 200CT",
			price: "3.99"
		},
		{ productTitle: "Gold Emblem Pistachio Delights", price: "6.99" },
		{
			productTitle: "CVS Health Allergy Relief Diphenhydramine Tablets",
			price: "20.49"
		},
		{
			productTitle: "Gold Emblem Abound Unsalted Pistachio & Almond Blend",
			price: "6.99"
		}
	],
	[
		{ productTitle: "CVS Alkaline Batteries AA 8-Pack", price: "6.79" },
		{
			productTitle: "CVS Health Advanced Probiotic Gummies, 60CT",
			price: "11.29"
		},
		{
			productTitle: "CVS Health Children's Ibuprofen Oral Suspension",
			price: "6.99"
		},
		{ productTitle: "CVS Alkaline Batteries AAA 4-Pack", price: "4.49" },
		{
			productTitle: "Essence Of Beauty Mesh Bath Sponge, Black",
			price: "2.99"
		},
		{
			productTitle: "CVS Health Saline Solution for Sensitive Eyes",
			price: "6.29"
		},
		{
			productTitle: "CVS Health Allergy Relief Diphenhydramine Tablets",
			price: "20.49"
		},
		{
			productTitle: "CVS Health Vitamin C Easy To Swallow Caplets 500mg, 100CT",
			price: "5.99"
		},
		{
			productTitle: "Beauty 360 Premium 100% Cotton Squares, 200CT",
			price: "3.99"
		},
		{
			productTitle:
				"CVS Health No Drip Oxymetazoline Hydrochloride Nasal Mist, 1 OZ",
			price: "8.29"
		},
		{
			productTitle: "CVS Health Anti-Diarrheal Softgels, 24CT",
			price: "5.49"
		},
		{
			productTitle:
				"CVS Health Small Size Allergy Diphenydramine Hydrochloride Tablets",
			price: "4.89"
		},
		{ productTitle: "Gold Emblem Pistachio Delights", price: "6.99" },
		{
			productTitle: "CVS Health Allergy Relief 24 Hour Indoor/Outdoor",
			price: "21.99"
		},
		{
			productTitle: "Gold Emblem Abound Unsalted Pistachio & Almond Blend",
			price: "6.99"
		},
		{
			productTitle: "CVS Health Fast Acting Nasal Spray, 1 OZ",
			price: "7.59"
		},
		{
			productTitle: "Beauty 360 Premium Cotton Rounds, 100CT",
			price: "3.99"
		},
		{
			productTitle: "CVS Health Omeprazole Acid Reducer 20mg",
			price: "12.49"
		},
		{
			productTitle:
				"CVS Health Allergy Relief Loratadine Tablets 24 Hour Non-Drowsy, 10 mg, 10 CT",
			price: "7.79"
		},
		{
			productTitle:
				"CVS Health Omeprazole Acid Reducer Delayed Release Wildberry Mint Tablets 20mg, 42CT",
			price: "16.49"
		}
	],
	[
		{
			productTitle:
				"CVS Health Ultra-Soft Silicone Earplugs Antimicrobial Protection",
			price: "5.49"
		},
		{ productTitle: "CVS Health Anti-Fungal Powder", price: "8.99" },
		{
			productTitle: "CVS Health Omeprazole Acid Reducer 20mg",
			price: "12.49"
		},
		{
			productTitle: "Beauty 360 Premium Cotton Rounds, 100CT",
			price: "3.99"
		},
		{
			productTitle: "CVS Health Men's Multivitamin & Multimineral Tablets, 120CT",
			price: "9.99"
		},
		{
			productTitle: "Tagamet HB 200 Acid Reducer Tablets, 30CT",
			price: "9.49"
		},
		{
			productTitle:
				"CVS Health Omeprazole Acid Reducer Delayed Release Wildberry Mint Tablets 20mg, 42CT",
			price: "16.49"
		},
		{
			productTitle:
				"CVS Health Allergy Relief Loratadine Tablets 24 Hour Non-Drowsy, 10 mg, 10 CT",
			price: "7.79"
		},
		{
			productTitle: "CVS Health Sterile Premium Latex-Free Rolled Gauze 5CT",
			price: "9.99"
		},
		{
			productTitle:
				"CVS Health Pain Relief Caplets Extra Strength Acetaminophen Caplets 500 mg, 50 CT",
			price: "5.99"
		},
		{
			productTitle: "Gold Emblem Abound Unsalted Pistachio Kernels",
			price: "5.79"
		},
		{
			productTitle:
				"Total Home Party Cups Strong & Sturdy, 16-Ounce Assorted Colors",
			price: "2.99"
		},
		{
			productTitle:
				"Garnier SkinActive Micellar Cleansing Water All in 1 Cleanser & Makeup Remover, 13.5 OZ",
			price: "9.79"
		},
		{ productTitle: "CVS Health Eye Itch Relief", price: "11.99" },
		{
			productTitle:
				"CVS Health Assorted Citrus Vitamin C Supplement Drops Value Size",
			price: "5.79"
		},
		{
			productTitle: "Total Home Facial Tissue Soft & Strong 2-Ply, 8 Pack",
			price: "2.79"
		},
		{
			productTitle: "CVS Health Fish Oil Softgels 1000mg, 120CT",
			price: "9.99"
		},
		{ productTitle: "CVS Health Ibuprofen Tablets, 24 CT", price: "3.69" },
		{
			productTitle: "Beauty 360 Premium Cotton Rounds, 80CT",
			price: "3.79"
		},
		{
			productTitle: "Gold Emblem Deluxe Mixed Nuts Lightly Salted",
			price: "4.99"
		}
	],
	[
		{
			productTitle: "CVS Health Men's Underwear Maximum Absorbency L/XL, 32CT",
			price: "17.99"
		},
		{ productTitle: "CVS Alkaline Batteries AAA, 8CT", price: "6.79" },
		{
			productTitle:
				"CVS Health Maximum Strength Cortisone Intense Healing Anti-Itch Cream, 1 OZ",
			price: "5.59"
		},
		{
			productTitle: "CVS Health Guards For Men Maximum Absorbency One Size, 52CT",
			price: "12.49"
		},
		{
			productTitle:
				"CVS Health Original Prescription Strength Purelax Laxative Powder, 30 Dose",
			price: "13.99"
		},
		{ productTitle: "Gold Emblem Classic Blend Trail Mix", price: "3.69" },
		{
			productTitle: "Gold Emblem Abound Heavenly Light Popcorn, 5oz",
			price: "2.79"
		},
		{ productTitle: "Emergen-C Vitamin C, 10CT", price: "5.99" },
		{
			productTitle: "Gold Emblem Fancy Whole Cashews Lightly Salted",
			price: "8.79"
		},
		{
			productTitle:
				"CVS Health Women's Underwear Maximum Absorbency XL, Lavender, 24 CT",
			price: "17.99"
		},
		{
			productTitle: "CVS Health Ibuprofen 200 mg Coated Caplets",
			price: "4.69"
		},
		{
			productTitle: "CVS Health Durable Nitrile Exam Gloves Medium, 50CT",
			price: "9.99"
		},
		{
			productTitle: "Gold Emblem Deluxe Mixed Nuts No Peanuts",
			price: "4.99"
		},
		{
			productTitle: "CVS Health Acid Reducer Tablets 75mg",
			price: "5.99"
		},
		{
			productTitle:
				"CVS Health Durable Nitrile Exam Disposable Gloves, One Size Fits Most, 120 CT",
			price: "20.99"
		},
		{
			productTitle: "Gold Emblem Dried Philippine Mango Slices, 5 OZ",
			price: "5.29"
		},
		{
			productTitle: "CVS Health Medicated Cold Sore Treatment Maximum Strength",
			price: "5.99"
		},
		{
			productTitle: "Gold Emblem Natural Shelled Pistachios, Sea Salt",
			price: "5.79"
		},
		{
			productTitle: "CVS Health Vitamin C Caplets 1000mg",
			price: "15.49"
		},
		{
			productTitle: "CVS Health Biotin Softgels 10000mcg, 60CT",
			price: "13.79"
		}
	],
	[
		{
			productTitle: "Caliber Security Envelopes 4 1/2 X 9 1/2 Inch",
			price: "3.79"
		},
		{
			productTitle: "CVS Health Dye Free Ibuprofen 200 mg Tablets",
			price: "7.49"
		},
		{
			productTitle: "Gold Emblem Peanut Butter Filled Pretzel Nuggets",
			price: "6.99"
		},
		{
			productTitle: "CVS Health AM/PM Travel Pill Planner",
			price: "5.99"
		},
		{
			productTitle:
				"CVS Health Omeprazole Acid Reducer Delayed Release Tablets 20mg, 42CT",
			price: "16.49"
		},
		{
			productTitle: "Total Home Decorated Paper Plates 10-1/4 Inch",
			price: "5.79"
		},
		{
			productTitle: "CVS Health Magnesium Citrate Oral Solution 10 OZ, Cherry",
			price: "2.89"
		},
		{
			productTitle:
				"CVS Health Allergy Relief Diphenydramine Hydrochloride Tablets, 48 CT",
			price: "6.49"
		},
		{
			productTitle:
				"CVS Health Omeprazole Magnesium Acid Reducer 20.6 mg Delayed Release Capsules, 14CT",
			price: "7.29"
		},
		{
			productTitle: "CVS Health 70% Isopropyl Rubbing Alcohol",
			price: "3.49"
		},
		{
			productTitle: "CVS Health Non-Medicated Nasal Inhaler, Lavender Scent 1 EA",
			price: "4.99"
		},
		{
			productTitle: "Beauty 360 Makeup Remover Cleansing Cloth Towelettes",
			price: "5.99"
		},
		{
			productTitle: "Gold Emblem Abound Raw Natural Almonds, 20 OZ",
			price: "7.99"
		},
		{
			productTitle: "CVS Health Melatonin Quick Dissolve Tablets 10mg, 60CT",
			price: "14.49"
		},
		{
			productTitle:
				"CVS Health Sensitive Toothpaste With Fluoride Extra Whitening, 4 OZ",
			price: "4.29"
		},
		{
			productTitle: "Gold Emblem Mixed Nuts Lightly Salted",
			price: "4.99"
		},
		{ productTitle: "Gold Emblem Pure Honey", price: "5.79" },
		{
			productTitle: "CVS Health Miconazole 7 Day Vaginal Treatment Cream, 1.59 OZ",
			price: "13.49"
		},
		{
			productTitle: "CVS Health Medicated Chest Rub, 1.76 OZ",
			price: "4.59"
		},
		{
			productTitle: "CVS Health Coenzyme Q10 Softgels 200mg",
			price: "52.99"
		}
	],
	[
		{
			productTitle: "CVS Health Medicated Chest Rub, 1.76 OZ",
			price: "4.59"
		},
		{
			productTitle: "CVS Health Coenzyme Q10 Softgels 200mg",
			price: "52.99"
		},
		{
			productTitle: "CVS Health Warm or Cold Water Bottle",
			price: "17.49"
		},
		{ productTitle: "CVS Health Medicated Wipes, 48CT", price: "6.49" },
		{
			productTitle: "CVS Health Pediatric Electrolyte Liquid Strawberry",
			price: "5.29"
		},
		{
			productTitle: "CVS Health Clotrimazole Cream Usp 1%, 0.5 OZ",
			price: "7.99"
		},
		{
			productTitle: "CVS Health Dairy Relief Caplets Extra Strength",
			price: "5.59"
		},
		{
			productTitle: "CVS Health Flexible Tip Digital Thermometer",
			price: "17.49"
		},
		{
			productTitle: "CVS Health Medicated Chest Rub, 3.53 OZ",
			price: "7.69"
		},
		{ productTitle: "CVS AA Alkaline Batteries", price: "13.79" },
		{
			productTitle: "CVS Health Vitamin C Orange Gummies 250 mg, 150CT",
			price: "14.49"
		},
		{ productTitle: "Gold Emblem Honey Roasted Cashews", price: "8.79" },
		{ productTitle: "CVS Health Nasal Spray Original", price: "5.49" },
		{ productTitle: "CVS Health Multi-Use Ice Bag", price: "15.49" },
		{
			productTitle: "CVS Health Artificial Tears Lubricant Eye Drops",
			price: "9.29"
		},
		{
			productTitle:
				"CVS Health Allergy Relief Non-Drowsy Loratadine Tablets, 5 CT",
			price: "4.99"
		},
		{
			productTitle:
				"CVS Health Maximum Strength Mucus Extended Release Tablets, 14 CT",
			price: "15.29"
		},
		{ productTitle: "CVS Health Dental Pick & Scaler", price: "7.99" },
		{
			productTitle: "CVS Health Vapor Steam Liquid Medication",
			price: "6.29"
		},
		{
			productTitle:
				"CVS Health Maximum Strength Cortisone Intense Healing Anti-Itch Cream, 2 OZ",
			price: "8.49"
		}
	],
	[
		{ productTitle: "Gold Emblem Fancy Whole Cashews", price: "8.79" },
		{
			productTitle:
				"CVS Health Miconazole Yeast Infection Relief 1-Day Treatment; 3-Step System",
			price: "16.49"
		},
		{
			productTitle:
				"CVS Health Maximum Strength Cortisone Intense Healing Anti-Itch Cream, 2 OZ",
			price: "8.49"
		},
		{
			productTitle: "CVS Health Nasal Decongestant Vapor Inhaler, 1 Pack",
			price: "6.29"
		},
		{
			productTitle: "CVS Health Chewable Vitamin C Tablets 1000mg, 100CT",
			price: "14.99"
		},
		{ productTitle: "CVS Health Iron Tablets 65mg, 90CT", price: "7.99" },
		{
			productTitle: "CVS Health Non-Medicated Nasal Inhaler, Lavender Scent 1 EA",
			price: "4.99"
		},
		{
			productTitle: "CVS Health Interdental Brushes, 16 CT",
			price: "5.39"
		},
		{ productTitle: "CVS Health Melatonin Tablets 5mg", price: "11.29" },
		{
			productTitle: "CVS Health Iron 65 mg Tablets, 200 CT",
			price: "11.49"
		},
		{
			productTitle: "CVS Health Gentle Laxative Bisacodyl USP Tablets 5mg",
			price: "7.69"
		},
		{
			productTitle: "Total Home Zipper Seal Sandwich Bags",
			price: "3.79"
		},
		{
			productTitle: "CVS Health Hair, Skin & Nails 2,500mcg Biotin Gummies",
			price: "7.99"
		},
		{
			productTitle: "Poise Ultimate Absorbency Incontinence Pads",
			price: "19.99"
		},
		{ productTitle: "Beauty 360 100% Cotton Balls", price: "2.19" },
		{
			productTitle: "CVS Health Epsom Salt Lavender Scented",
			price: "3.49"
		},
		{
			productTitle: "CVS Health Immune Support Vitamin C Fizzy Drink 1000mg, 36CT",
			price: "10.99"
		},
		{
			productTitle:
				"CVS Health Glucosamine Chondroitin with MSM Triple Strength Caplets",
			price: "33.99"
		},
		{
			productTitle: "CVS Health Nicotine Lozenge 4mg, 20CT",
			price: "11.99"
		},
		{ productTitle: "CVS Health Heat Therapy Patches", price: "7.79" }
	],
	[
		{
			productTitle: "CVS Health Interdental Brushes, 16 CT",
			price: "5.39"
		},
		{
			productTitle:
				"CVS Health Over-The-Calf Light Compression Socks Unisex, 1 Pair",
			price: "9.99"
		},
		{
			productTitle: "Secret Outlast Xtend Clear Gel Antiperspirant/Deodorant",
			price: "11.99"
		},
		{ productTitle: "CVS Health Heat Therapy Patches", price: "7.79" },
		{
			productTitle: "CVS Health Antifungal Ringworm Cream",
			price: "9.79"
		},
		{
			productTitle: "Total Home Zipper Seal Sandwich Bags",
			price: "3.79"
		},
		{ productTitle: "Beauty 360 100% Cotton Balls", price: "2.19" },
		{
			productTitle: "CVS Health Immune Support Vitamin C Fizzy Drink 1000mg, 36CT",
			price: "10.99"
		},
		{
			productTitle: "CVS Health Triple Magnesium Complex 400mg Capsules",
			price: "9.79"
		},
		{
			productTitle: "CVS Health Epsom Salt Lavender Scented",
			price: "3.49"
		},
		{
			productTitle: "Tagamet HB 200 Acid Reducer Tablets, 30CT",
			price: "9.49"
		},
		{ productTitle: "CVS Health Dry Eye Relief Eye Drops", price: "6.99" },
		{
			productTitle: "CVS Health Extra Strength Gas Relief Simethicone 125mg",
			price: "3.89"
		},
		{
			productTitle: "CVS Health Nicotine Lozenge 4mg, 20CT",
			price: "11.99"
		},
		{
			productTitle: "CVS Hearing Aid Batteries Size 312 24-Pack",
			price: "14.59"
		},
		{
			productTitle: "CVS Health Airshield Adult Immunity Support Gummies, 42CT",
			price: "10.99"
		},
		{ productTitle: "CVS Alkaline Batteries AA 16-Pack", price: "10.79" },
		{
			productTitle: "Gold Emblem Abound Walnut Halves & Pieces",
			price: "4.99"
		},
		{
			productTitle: "CVS Health Elastic Bandage 1CT, 4in x 1.8yd",
			price: "6.59"
		},
		{
			productTitle:
				"CVS Health Original Prescription Strength Allergy Relief Tablets, 365 CT",
			price: "55.99"
		}
	]
];

let couponID = 0;

function randomMinMax(min, max) {
	return Math.floor(Math.random() * max) + min;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function populate() {
	while (true) {
		let coupons = document.getElementById("coupons");
		let windowRelativeBottom = document.documentElement.getBoundingClientRect()
			.bottom;
		if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
		getCoupon();
	}
}

// THINGS NEEDED FOR COUPON
// Current Date to set EXPIRATION DATE
// Product Name
// Product Price -- used to determine coupon value
// 20 Digit Barcode
// 5 Digit Coupon #
// Price Off / Discount
// Discount Description

function newCoupon(discount, description, value) {
	//couponID & barcode will be done here automatically
	this.discount = discount;
	this.description = description;
	this.value = value;
	this.barcode = randomBarcode();
	this.couponCode = randomMinMax(10000, 90000);
}

function formatCoupon(coupon) {
	let coupons = document.getElementById("coupons");
	coupons.insertAdjacentHTML(
		"beforeend",
		`
        <div class="couponContainer">
          <h1 class="logo">CVS/pharmacy</h1>
          <div class="discount">${coupon.discount}</div>
          <div class="discountDetails">${coupon.discount} ${
			coupon.description
		}</div>
          <div class="expiration">
            <div class="item bold">
              Expires 12/12/2018
            </div>
            <div class="item">
             ${coupon.value}
            </div>
          </div>
          <div class="barcode">
            HelloCVSMate1
          </div>
          <div class="barcodeID center">
            ${coupon.barcode}
          </div>
          <div class="legal center">
            ExtraCare card required. Excludes lottery, money orders, postage stamps, milk, prescriptions, pre-paid cards, gift cards, pseudoephedrine products, other fees, deposits, taxes, alcohol and local exclusions. No cash back. Tax charged on pre-coupon price
            where required. Limit of one purchase-based coupon, i.e., $4 off $20 purchase, per transaction. Not valid in specialty centers within CVS.
          </div>
          <div class="couponBottom">
            <p>ExtraCare Card #: *7140 00130030598777</p>
            <p>CPN#: ${coupon.couponCode}</p>
          </div>
        </div>
      `
	);
}

// THINGS NEEDED FOR COUPON
// Current Date to set EXPIRATION DATE
// Dollar Rewards $1-10
// 18 Digit Barcode
// 5 Digit Coupon #

randomBarcode = () => {
	//make 18 digit barcode
	// 4 4 4 4 2
	return `${randomMinMax(1000, 9000)}
  ${randomMinMax(1000, 9000)}
  ${randomMinMax(1000, 9000)}
  ${randomMinMax(1000, 9000)}
  ${randomMinMax(10, 90)}`;
};

getProduct = () => {
	let products = rawProductData.flat(2); // not recursive -- fixed flatten based on the data below 🤷
	let productId = getRandomInt(products.length);
	return products[productId];
};

percentCoupon = () => {
	const percentOptions = [5, 10, 15, 20, 25, 50]; //popular discount options
	let randomPercent = percentOptions[getRandomInt(percentOptions.length)];
	randomPercent = `${randomPercent}% off`;
	let product = getProduct();
	let newCoup = new newCoupon(
		randomPercent,
		product.productTitle,
		"Up to $99 value"
	);
	return formatCoupon(newCoup);
};

fixedCoupon = () => {
	//max discount is 50% off
	// productPrice x .5 = discountTakenOff
	// i.e. $10 product get random number between 0.01  and 5 ...
	// so a user will get $5 off an item which would be 50% off

	let product = getProduct();
	let couponValue = Math.round(parseFloat(product.price) * 0.5);
	let discountPrice = `$${couponValue}.00 off`;
	couponValue = `Up to $${couponValue} value`;
	let newCoup = new newCoupon(discountPrice, product.productTitle, couponValue);
	return formatCoupon(newCoup);
};

buckCoupon = () => {
	console.log("BUCK", couponID);
};

getCoupon = () => {
	couponID++;
	if (couponID % 13 == 0) {
		// every 13th coupon load a BUCKs
		buckCoupon();
	} else {
		const coupons = ["percent", "fixed"];
		let randomCoupon = getRandomInt(coupons.length);
		switch (randomCoupon) {
			case 0:
				fixedCoupon();
				break;
			default:
				percentCoupon();
		}
	}
};

window.addEventListener("scroll", populate);

populate(); // init document