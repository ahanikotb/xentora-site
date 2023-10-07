import { NextResponse } from "next/server";
import verifier from "email-verify";

var infoCodes = verifier.verifyCodes;

// type FindEmailRequest = {
//   first_name: String;
//   last_name: String;
//   domain_name: String;
// };
export async function GET(request) {
  // console.log(request);
  // const res = await request.json();
  const { searchParams } = new URL(request.url);
  // const id = searchParams.get('id')
  const res = {
    domain: searchParams.get("domain"),
    first_name: searchParams.get("first_name"),
    last_name: searchParams.get("last_name"),
  };
  var domain = parseDomain(res.domain);

  var options = makeNameOptions(
    cleanName(res.first_name),
    cleanName(res.last_name)
  );

  var possibilities = options.map((o) => o + "@" + domain);

  for (let email of possibilities) {
    let result;
    verifier.verify(
      email,
      {
        port: 25,
        sender: "name@example.org",
        timeout: 2,
        fqdn: "mail.example.org",
        ignore: false,
      },
      (err, info) => {
        result = info;
      }
    );
    if ((result = infoCodes.success)) {
      return NextResponse.json({ result: email });
    }
  }

  return NextResponse.json({ result: "No Email Found" });
}
function makeNameOptions(f_name, l_name) {
  if (f_name.length < 1 && l_name.length < 1) {
    return [];
  }
  if (f_name.length < 1) {
    return [l_name];
  }
  if (l_name.length < 1) {
    return [f_name];
  }
  const options = [
    f_name[0] + l_name,
    // f_name[0] + "_" + l_name,
    f_name[0] + "." + l_name,
    f_name + "." + l_name,
    f_name + "." + l_name[0],
    // f_name + "_" + l_name[0],
    f_name + l_name,
    // f_name + "_" + l_name,
    f_name,
    l_name,
  ];
  return options;
}
function parseDomain(d) {
  d = d
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .split("/")[0];
  return d;
}
function cleanName(s) {
  // Trim spaces
  s = s.trim();
  // Replace all spaces and dashes with an empty string
  s = s.replace(/ /g, "").replace(/-/g, "");
  // Lowercase the name
  s = s.toLowerCase();
  return s;
}

// CleanFName equivalent in JavaScript
function cleanFName(s) {
  // Lowercase and trim spaces
  return s.toLowerCase().trim();
}

// CleanLName equivalent in JavaScript
function cleanLName(s) {
  // Lowercase, trim spaces, and remove spaces
  return s.toLowerCase().trim().replace(/ /g, "");
}
