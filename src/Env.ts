function loadEnvironmentVariable(keyname: string) {
    const envVar = process.env[keyname];

    if (!envVar) {
        throw new Error(`Configuration must include ${keyname}`)
    }

    return envVar;
}


export const PORT = Number(loadEnvironmentVariable('PORT'));

export const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA4rS1HcCJ58DlAn8KdrLW
0H06I7Vx8DYzGKN+IdwgolXr62mzBppIbT4xugXCiIkMGZqYvdzXY9UrbmX0k0nP
b0XOR19OxW1nrO84HQcvyT/ulwphppHcoqB5JUGA/0jaUmUJbp37oPBGbrRn1rmG
zJ6Jhi4Ah0RscbO/cjDB/uuGmFhig7zWLqKTPvjZ042Yc23wr57BxaFb4BB4Xlrr
kSIn7G4YfHc3sj7AykRVw03pdkEvbYrP2inUWVQ4znSO/an9ftizDOvAiNWvsjPr
aCYOw4dqoAWy1QReAevxtIQN8u2SmcyQcB+QGJG0f7EFQ5IoZVjZrpbeK9yTRMou
EPfolTDG7RLhLry7wUvMd9fzCoBCpSWhO4xIqX1S2lc2p8AMsFTP+L5kcTJoIuwT
E8kv2jfy3PyacVsISUsgyP+TZQqhSEhUB8iHDwAv0ix3L220o1AbB78V4kl2684K
0K+2UttLx9KrRyp3AavYmDkQbYbhcF6yw0ccrMveCsTDeSOnzC/36FS1XhxTEV/Y
+s0/AA4eJvJHso7cHP3WBOFtlY3CkzKOq//dq27PEnQWS3cdZbzQbvEM9pkmmeWl
4vNRddtNY0m1crEJJyT/9gOiurWw6tz3riezKMqDD8j5ooEpcMIR5tnd7VTBfk38
s0KQQsKrnaMrO3EFhIjltJsCAwEAAQ==
-----END PUBLIC KEY-----`