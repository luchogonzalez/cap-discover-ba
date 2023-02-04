using {dba.discover as my} from '../db/data-model';

service DiscoverService @(path: '/odata/discoverservice'
                                                        //requires : 'authenticated-user'
                                ) {
  @readonly
  entity Lines as projection on my.Lines;
}