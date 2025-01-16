import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        navigate("/dashboard");
      }
    });

    // Check if user is already signed in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 min-h-screen items-center gap-8 p-4 md:p-8">
          {/* Left column with image */}
          <div className="hidden lg:flex flex-col justify-center items-center space-y-8">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="People collaborating"
              className="rounded-2xl shadow-xl w-full max-w-2xl object-cover"
            />
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Build Stronger Relationships
              </h2>
              <p className="text-gray-600 max-w-md">
                Transform your business relationships with intelligent insights and meaningful connections
              </p>
            </div>
          </div>

          {/* Right column with login form */}
          <div className="w-full max-w-md mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl text-center font-semibold">
                  Welcome to Releff
                </CardTitle>
                <p className="text-center text-gray-600">
                  Sign in to access your dashboard
                </p>
              </CardHeader>
              <CardContent>
                <SupabaseAuth 
                  supabaseClient={supabase}
                  appearance={{ 
                    theme: ThemeSupa,
                    variables: {
                      default: {
                        colors: {
                          brand: '#0EA5E9',
                          brandAccent: '#0284C7',
                          inputBackground: 'white',
                          inputText: 'black',
                          inputPlaceholder: '#94A3B8',
                          inputBorder: '#E2E8F0',
                          inputBorderHover: '#0EA5E9',
                          inputBorderFocus: '#0EA5E9',
                        },
                        borderWidths: {
                          buttonBorderWidth: '1px',
                          inputBorderWidth: '1px',
                        },
                        radii: {
                          borderRadiusButton: '0.5rem',
                          buttonBorderRadius: '0.5rem',
                          inputBorderRadius: '0.5rem',
                        },
                      },
                    },
                    className: {
                      container: 'w-full',
                      button: 'w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors',
                      input: 'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent',
                      label: 'block text-sm font-medium text-gray-700 mb-1',
                    },
                  }}
                  theme="light"
                  providers={[]}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;