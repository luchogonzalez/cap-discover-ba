namespace dba.discover;

using {
  cuid,
  managed
} from '@sap/cds/common';

entity Lines : managed {
  lineNumber  : Integer;
  ramal       : String;
  description : String;
  direction   : Integer;
}